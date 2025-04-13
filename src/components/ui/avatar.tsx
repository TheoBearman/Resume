"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image from "next/image";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    width?: number;
    height?: number;
    priority?: boolean;
  }
>(({ className, src, width = 64, height = 64, priority = false, ...props }, ref) => {
  // If src is a string and not a data URL or SVG, use Next.js Image
  const useNextImage = typeof src === 'string' && 
    !src.startsWith('data:') && 
    !src.endsWith('.svg');

  return useNextImage ? (
    <div className="absolute inset-0">
      <Image
        src={src as string}
        alt={props.alt || "Avatar"}
        width={width}
        height={height}
        priority={priority}
        className={cn("h-full w-full object-cover", className)}
      />
    </div>
  ) : (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("h-full w-full object-cover", className)}
      src={src}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
