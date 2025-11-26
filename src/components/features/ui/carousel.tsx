"use client";

import { useEffect, useMemo } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

type DivProps = HTMLAttributes<HTMLDivElement>;

interface CarouselProps extends DivProps {
  opts?: unknown;
  plugins?: unknown[];
  children: ReactNode;
  setApi?: (api: CarouselApi) => void;
}

export function Carousel({ className = "", children, setApi }: CarouselProps) {
  const api = useMemo<CarouselApi>(
    () => ({
      canScrollNext: () => false,
      scrollNext: () => undefined,
      scrollTo: () => undefined,
      on: () => undefined,
      selectedScrollSnap: () => 0,
    }),
    []
  );

  useEffect(() => {
    setApi?.(api);
  }, [api, setApi]);

  return (
    <div className={`relative overflow-hidden ${className}`}>{children}</div>
  );
}

export function CarouselContent({ className = "", children, ...rest }: DivProps) {
  return (
    <div
      className={`flex w-full touch-pan-x snap-x snap-mandatory transition-transform duration-300 ease-out ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CarouselItem({ className = "", children, ...rest }: DivProps) {
  return (
    <div className={`snap-start ${className}`} {...rest}>
      {children}
    </div>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CarouselPrevious({ className = "", children = "Prev", ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label="Previous"
      className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 rounded-full border px-3 py-2 shadow ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function CarouselNext({ className = "", children = "Next", ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label="Next"
      className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 rounded-full border px-3 py-2 shadow ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
