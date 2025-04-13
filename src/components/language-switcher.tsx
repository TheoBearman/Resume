"use client";

import { Button } from "@/components/ui/button";
import { GlobeIcon } from "lucide-react";

// Disabled language switcher component
export function LanguageSwitcher() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="print:hidden size-8 opacity-50 cursor-not-allowed"
      title="Language switching disabled"
      disabled
    >
      <GlobeIcon className="h-4 w-4" />
      <span className="sr-only">Change language (disabled)</span>
    </Button>
  );
} 