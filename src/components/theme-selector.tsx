"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { PaletteIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Disabled theme selector component
export function ThemeSelector() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="print:hidden size-8 opacity-50 cursor-not-allowed"
      title="Theme selection disabled"
      disabled
    >
      <PaletteIcon className="h-4 w-4" />
      <span className="sr-only">Change theme (disabled)</span>
    </Button>
  )
} 