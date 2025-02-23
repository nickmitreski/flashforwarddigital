"use client"

import * as React from "react"
import { FileText } from 'lucide-react'
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function WindowsExplorer() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    {isOpen && (
    <div className="w-full max-w-2xl border border-[#000080] shadow-md">
      {/* Title Bar */}
      <div className="flex h-6 items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2">
        <span className="text-sm font-bold text-white">Documents</span>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 bg-[#c0c0c0] hover:bg-[#c0c0c0]"
          >
            <span className="text-xs">_</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 bg-[#c0c0c0] hover:bg-[#c0c0c0]"
          >
            <span className="text-xs">□</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-4 w-4 bg-[#c0c0c0] hover:bg-[#c0c0c0]"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xs">×</span>
          </Button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="flex gap-4 bg-[#c0c0c0] px-2 py-1 text-sm">
        <button className="hover:underline">File</button>
        <button className="hover:underline">Edit</button>
        <button className="hover:underline">Views</button>
        <button className="hover:underline">Go</button>
        <button className="hover:underline">Favourites</button>
        <button className="hover:underline">Help</button>
      </div>

      <Separator />

      {/* Content Area */}
      {isOpen && (
        <div className="min-h-[200px] bg-white p-4">
          <div className="grid grid-cols-2 gap-8">
            {/* Secret_Codes.txt */}
            <button 
              className="group flex flex-col items-center gap-1"
              onClick={() => alert("Opening Secret_Codes.txt")}
            >
              <div className="relative">
                <FileText className="h-12 w-12 text-blue-600" />
                <div className="absolute bottom-2 left-2 h-4 w-4 bg-white" />
              </div>
              <span className="text-sm text-black group-hover:underline">
                Secret_Codes.txt
              </span>
            </button>

            {/* Diary.rtf */}
            <button 
              className="group flex flex-col items-center gap-1"
              onClick={() => alert("Opening Diary.rtf")}
            >
              <div className="relative">
                <FileText className="h-12 w-12 text-blue-600" />
                <div className="absolute bottom-2 left-2 h-4 w-4 bg-white" />
              </div>
              <span className="text-sm text-black group-hover:underline">
                Diary.rtf
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
    )}
  )
}

