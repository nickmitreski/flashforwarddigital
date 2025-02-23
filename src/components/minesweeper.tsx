import * as React from "react"
import { Smile, Frown, Meh, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Cell {
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  neighborMines: number
}

interface MinesweeperProps {
  onClose?: () => void;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function Minesweeper({ onClose, style, onClick }: MinesweeperProps) {
  const GRID_SIZE = 8;
  const MINE_COUNT = 10;
  
  const [gameState, setGameState] = React.useState<"playing" | "won" | "lost">("playing")
  const [minesLeft, setMinesLeft] = React.useState(MINE_COUNT)
  const [timeElapsed, setTimeElapsed] = React.useState(0)
  const [isFirstClick, setIsFirstClick] = React.useState(true)
  const timerRef = React.useRef<NodeJS.Timeout>()
  
  const [grid, setGrid] = React.useState<Cell[][]>(
    Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0
      }))
    )
  )

  // Initialize timer
  React.useEffect(() => {
    if (gameState === "playing" && !isFirstClick) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState, isFirstClick])

  const initializeGrid = (firstClickRow: number, firstClickCol: number) => {
    const newGrid = [...grid]
    let minesPlaced = 0

    // Place mines randomly, avoiding the first click position
    while (minesPlaced < MINE_COUNT) {
      const row = Math.floor(Math.random() * GRID_SIZE)
      const col = Math.floor(Math.random() * GRID_SIZE)
      
      if (!newGrid[row][col].isMine && 
          (row !== firstClickRow || col !== firstClickCol)) {
        newGrid[row][col].isMine = true
        minesPlaced++
      }
    }

    // Calculate neighbor mines for each cell
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (!newGrid[i][j].isMine) {
          let count = 0
          // Check all 8 neighboring cells
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              const ni = i + di
              const nj = j + dj
              if (ni >= 0 && ni < GRID_SIZE && nj >= 0 && nj < GRID_SIZE) {
                if (newGrid[ni][nj].isMine) count++
              }
            }
          }
          newGrid[i][j].neighborMines = count
        }
      }
    }
    
    return newGrid
  }

  const revealCell = (row: number, col: number, newGrid: Cell[][]) => {
    if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) return
    if (newGrid[row][col].isRevealed || newGrid[row][col].isFlagged) return

    newGrid[row][col].isRevealed = true

    // If it's an empty cell, reveal neighbors
    if (newGrid[row][col].neighborMines === 0) {
      for (let di = -1; di <= 1; di++) {
        for (let dj = -1; dj <= 1; dj++) {
          revealCell(row + di, col + dj, newGrid)
        }
      }
    }
  }

  const checkWinCondition = (grid: Cell[][]) => {
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const cell = grid[i][j]
        if (!cell.isMine && !cell.isRevealed) return false
        if (cell.isMine && !cell.isFlagged) return false
      }
    }
    return true
  }

  const handleClick = (row: number, col: number) => {
    if (gameState !== "playing" || grid[row][col].isFlagged) return

    const newGrid = [...grid.map(row => [...row])]

    if (isFirstClick) {
      setIsFirstClick(false)
      const initializedGrid = initializeGrid(row, col)
      revealCell(row, col, initializedGrid)
      setGrid(initializedGrid)
      return
    }

    if (newGrid[row][col].isMine) {
      // Game over - reveal all mines
      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
          if (newGrid[i][j].isMine) {
            newGrid[i][j].isRevealed = true
          }
        }
      }
      setGameState("lost")
      if (timerRef.current) clearInterval(timerRef.current)
    } else {
      revealCell(row, col, newGrid)
      if (checkWinCondition(newGrid)) {
        setGameState("won")
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }
    
    setGrid(newGrid)
  }

  const handleFlag = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault()
    if (gameState !== "playing" || grid[row][col].isRevealed) return

    const newGrid = [...grid.map(row => [...row])]
    newGrid[row][col].isFlagged = !newGrid[row][col].isFlagged
    setGrid(newGrid)
    setMinesLeft(prev => newGrid[row][col].isFlagged ? prev - 1 : prev + 1)
  }

  const resetGame = () => {
    setGameState("playing")
    setTimeElapsed(0)
    setMinesLeft(MINE_COUNT)
    setIsFirstClick(true)
    setGrid(Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborMines: 0
      }))
    ))
  }

  // Digital display component for timer and mine counter
  const DigitalDisplay = ({ value }: { value: number }) => (
    <div className="flex h-8 w-14 items-center justify-center bg-black p-1">
      <span className="font-mono text-2xl text-red-600">
        {String(Math.min(999, Math.max(0, value))).padStart(3, '0')}
      </span>
    </div>
  )

  const getFaceIcon = () => {
    switch (gameState) {
      case "won": return <Smile className="h-6 w-6 text-yellow-400" />
      case "lost": return <Frown className="h-6 w-6 text-yellow-400" />
      default: return <Meh className="h-6 w-6 text-yellow-400" />
    }
  }

  return (
    <div className="w-full max-w-md p-4">
      {/* Status Bar */}
      <div className="mb-4 flex items-center justify-between border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-2">
        <DigitalDisplay value={minesLeft} />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#c0c0c0] hover:bg-[#c0c0c0]"
          onClick={resetGame}
        >
          {getFaceIcon()}
        </Button>
        <DigitalDisplay value={timeElapsed} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-8 border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white bg-[#c0c0c0] p-1">
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <Button
              key={`${i}-${j}`}
              variant="outline"
              size="icon"
              className={`h-8 w-8 border-2 p-0 m-0 ${
                cell.isRevealed
                  ? "border-[#808080] bg-[#c0c0c0]"
                  : "border-t-white border-l-white border-r-[#808080] border-b-[#808080] bg-[#c0c0c0] hover:bg-[#c0c0c0]"
              }`}
              onClick={() => handleClick(i, j)}
              onContextMenu={(e) => handleFlag(e, i, j)}
            >
              {cell.isFlagged ? "🚩" : 
               cell.isRevealed ? (
                 cell.isMine ? "💣" : 
                 cell.neighborMines ? (
                   <span className={`
                     ${cell.neighborMines === 1 ? 'text-blue-600' : ''}
                     ${cell.neighborMines === 2 ? 'text-green-600' : ''}
                     ${cell.neighborMines === 3 ? 'text-red-600' : ''}
                     ${cell.neighborMines === 4 ? 'text-blue-900' : ''}
                     ${cell.neighborMines === 5 ? 'text-red-900' : ''}
                     ${cell.neighborMines === 6 ? 'text-teal-600' : ''}
                     ${cell.neighborMines === 7 ? 'text-black' : ''}
                     ${cell.neighborMines === 8 ? 'text-gray-600' : ''}
                   `}>
                     {cell.neighborMines}
                   </span>
                 ) : ""
               ) : ""}
            </Button>
          ))
        )}
      </div>
    </div>
  )
}