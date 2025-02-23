import { useState, useEffect } from 'react'

export function useVisitDuration() {
  const [visitStartTime] = useState<Date>(new Date())
  const [visitDuration, setVisitDuration] = useState<string>("0:00")

  useEffect(() => {
    const updateDuration = () => {
      const now = new Date()
      const diff = now.getTime() - visitStartTime.getTime()
      const minutes = Math.floor(diff / 60000)
      const seconds = Math.floor((diff % 60000) / 1000)
      setVisitDuration(`${minutes}:${seconds.toString().padStart(2, '0')}`)
    }

    const timer = setInterval(updateDuration, 1000)
    return () => clearInterval(timer)
  }, [visitStartTime])

  return visitDuration
} 