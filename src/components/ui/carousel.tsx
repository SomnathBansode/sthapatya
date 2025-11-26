"use client";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/features/ui/carousel";

export type CarouselApi = {
  canScrollNext?: () => boolean;
  scrollNext?: () => void;
  scrollTo?: (index: number) => void;
  on?: (event: string, handler: () => void) => void;
  selectedScrollSnap?: () => number;
};
