"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  interval?: number;
  className?: string;
}

function MobileCarousel<T>({
  items,
  renderItem,
  interval = 4000,
  className = "",
}: MobileCarouselProps<T>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items.length) {
    return null;
  }

  const currentItem = items[index];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          {renderItem(currentItem, index)}
        </motion.div>
      </AnimatePresence>

      <div className="mt-2 flex justify-center gap-2">
        {items.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`h-2 w-2 rounded-full transition-colors ${
              dotIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to item ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MobileCarousel;
