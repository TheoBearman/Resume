"use client";

import { Button } from "@/components/ui/button";
import { PrinterIcon } from "lucide-react";
import { useEffect } from "react";

export function PrintButton() {
  // Prepare document for optimal printing
  const handlePrint = () => {
    // Add a class to the body to enable print-specific styles
    document.body.classList.add('preparing-print');
    
    // Small delay to ensure styles are applied
    setTimeout(() => {
      window.print();
      // Remove the class after printing is done/cancelled
      setTimeout(() => {
        document.body.classList.remove('preparing-print');
      }, 500);
    }, 100);
  };

  // Listen for keyboard shortcut (Cmd/Ctrl + P)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'p') {
        e.preventDefault();
        handlePrint();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handlePrint}
      className="print:hidden size-8"
      title="Print Resume (Cmd/Ctrl + P)"
    >
      <PrinterIcon className="h-4 w-4" />
      <span className="sr-only">Print Resume</span>
    </Button>
  );
} 