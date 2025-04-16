"use client"

import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { WorkExperience } from "@/types";

interface InteractiveTimelineProps {
  items: ReadonlyArray<WorkExperience>;
  getDuration: (start: string, end: string) => string;
}

export function InteractiveTimeline({ items, getDuration }: InteractiveTimelineProps) {
  // Sort items by date (most recent first)
  const sortedItems = [...items].sort((a, b) => {
    if (a.end === "Present") return -1;
    if (b.end === "Present") return 1;
    return new Date(b.start).getTime() - new Date(a.start).getTime();
  });

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <div className="space-y-2">
      {sortedItems.map((item, index) => {
        const isExpanded = expandedItem === index;
        const hasDetails = 
          (item.details && item.details.length > 0) || 
          (item.technologies && item.technologies.length > 0) || 
          (item.highlights && item.highlights.length > 0);

        return (
          <Card 
            key={`${item.company}-${item.title}-${index}`}
            className={cn(
              "relative border-border bg-card transition-all duration-300 animate-fade-in overflow-hidden",
              isExpanded ? "shadow-lg" : ""
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline indicator */}
            <div 
              className="absolute left-4 top-0 bottom-0 w-[2px] bg-border"
              style={{ 
                display: index < sortedItems.length - 1 ? 'block' : 'none'
              }}
            />
            
            <div className="relative">
              {/* Timeline dot */}
              <div className={cn(
                "absolute left-4 top-6 h-3 w-3 rounded-full bg-primary transform -translate-x-[6px] transition-all",
                isExpanded ? "animate-dot-pulse" : ""
              )} />
              
              {/* Content */}
              <div 
                className={cn(
                  "pl-8 pr-4 py-4 cursor-pointer",
                  hasDetails ? "hover:bg-accent/20" : ""
                )}
                onClick={() => hasDetails && toggleItem(index)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-1">
                  <div>
                    <h3 className="font-semibold text-base flex items-center gap-1">
                      {item.company}
                    </h3>
                    <p className="font-mono text-sm text-muted-foreground">{item.title}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
                            <Calendar className="h-3 w-3" />
                            <span>{item.start} - {item.end}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{getDuration(item.start, item.end)}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    {hasDetails && (
                      <button
                        className={cn(
                          "p-1 hover:bg-accent/30 rounded-full text-muted-foreground transition-all",
                          isExpanded ? "animate-pop" : ""
                        )}
                        aria-label={isExpanded ? "Collapse details" : "Expand details"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleItem(index);
                        }}
                      >
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">{item.description}</p>
                
                {/* Expandable details */}
                {hasDetails && (
                  <div 
                    className={cn(
                      "mt-3 overflow-hidden space-y-2 transition-all duration-500 ease-in-out",
                      isExpanded
                        ? "animate-slide-down-fade-in max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    {item.highlights && item.highlights.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold mb-1">Key Achievements</h4>
                        <ul className="list-disc list-inside text-xs space-y-1 stagger-animation">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className={isExpanded ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: isExpanded ? `${0.1 * idx + 0.1}s` : undefined }}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.details && item.details.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold mb-1">Responsibilities</h4>
                        <ul className="list-disc list-inside text-xs space-y-1 stagger-animation">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className={isExpanded ? "animate-fade-in" : "opacity-0"} style={{ animationDelay: isExpanded ? `${0.1 * idx + 0.1}s` : undefined }}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.technologies && item.technologies.length > 0 && (
                      <div>
                        <h4 className="text-xs font-semibold mb-1">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-1 stagger-animation">
                          {item.technologies.map((tech, idx) => (
                            <Badge variant="secondary" key={idx} className={isExpanded ? "animate-fade-in text-xs" : "opacity-0 text-xs"} style={{ animationDelay: isExpanded ? `${0.1 * idx + 0.1}s` : undefined }}>{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
} 