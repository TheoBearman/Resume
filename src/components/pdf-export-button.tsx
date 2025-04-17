"use client";

import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { RESUME_DATA } from "@/data/resume-data";

// Add TypeScript type support for jspdf-autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export function PdfExportButton() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generatePDF = async () => {
    try {
      setIsGenerating(true);
      toast({
        title: "Generating PDF",
        description: "Creating your resume PDF...",
        duration: 3000,
      });

      // Small delay to allow toast to display
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Rather than creating custom PDF styling, use html2canvas to capture
      // the exact rendering of the page in light mode
      
      // First, ensure we're in light mode for the capture
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      
      // Create a new PDF document with A4 size
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      
      // Get the main content element
      const mainElement = document.querySelector("main");
      if (!mainElement) throw new Error("Could not find main element");
      
      // Function to convert HTML element to PDF
      const addHtmlToPdf = async () => {
        // Use window.print() to correctly style the page for printing
        // But redirect the output to our PDF instead
        
        // Hide elements with print:hidden class before capturing
        const printHiddenElements = document.querySelectorAll('.print\\:hidden');
        printHiddenElements.forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
        
        // Apply print-specific styles
        const style = document.createElement('style');
        style.textContent = `
          @media print {
            body {
              background: white !important;
              color: black !important;
            }
            main {
              max-width: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .bg-background {
              background: white !important;
            }
            .bg-card {
              background: #f9fafb !important;
              border: 1px solid #e5e7eb !important;
            }
            .text-muted-foreground {
              color: #6b7280 !important;
            }
          }
        `;
        document.head.appendChild(style);
        
        // Use browser's print functionality to generate PDF
        window.print();
        
        // Clean up - remove temporary styles
        document.head.removeChild(style);
        
        // Restore hidden elements
        printHiddenElements.forEach(el => {
          (el as HTMLElement).style.display = '';
        });
      };
      
      // Since we can't directly capture the print output to PDF programmatically,
      // we'll generate a PDF that instructs the user to use print dialog instead
      pdf.setFontSize(20);
      pdf.text("To create a PDF with exact website styling:", 20, 30);
      
      pdf.setFontSize(14);
      pdf.text("1. Press Ctrl+P or Cmd+P", 20, 50);
      pdf.text("2. Change destination to 'Save as PDF'", 20, 60);
      pdf.text("3. Click Save", 20, 70);
      
      pdf.setFontSize(12);
      pdf.text("Note: This will preserve all styling exactly as it appears on the website.", 20, 90);
      
      // Save the PDF with instructions
      const cleanName = RESUME_DATA.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '_');
      pdf.save(`${cleanName}_Resume_Instructions.pdf`);
      
      // Open print dialog automatically
      setTimeout(() => {
        window.print();
      }, 1000);
      
      toast({
        title: "Print Dialog Opened",
        description: "For best results, use the print dialog to save as PDF. This preserves all website styling.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to open print dialog. Please try printing manually.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={generatePDF}
      disabled={isGenerating}
      className={cn("print:hidden size-8", isGenerating && "opacity-50 cursor-wait")}
      title="Download as PDF (opens print dialog for best results)"
      aria-label="Download as PDF (opens print dialog for best results)"
    >
      <FileDownIcon className="h-4 w-4" />
      <span className="sr-only">Download PDF (opens print dialog for best results)</span>
    </Button>
  );
} 