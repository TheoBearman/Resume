"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repoLink?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  repoLink,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border border-border bg-card">
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <h3 className="text-base font-bold leading-none">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex-1 text-xs text-muted-foreground">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2 pt-4">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-1 py-0 text-[10px]">
              {tag}
            </Badge>
          ))}
        </div>
        {link && (
          <Button asChild size="sm" variant="outline" className="gap-1">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-7 gap-1 text-xs"
            >
              View Project <ExternalLinkIcon className="ml-1 h-3 w-3" />
            </a>
          </Button>
        )}
        {repoLink && (
          <Button asChild size="sm" variant="outline" className="gap-1">
            <a 
              href={repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-7 gap-1 text-xs"
            >
              View Repository <ExternalLinkIcon className="ml-1 h-3 w-3" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
