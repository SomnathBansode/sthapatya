"use client";

import type { InputHTMLAttributes } from "react";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({ onCheckedChange, ...props }: SwitchProps) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        {...props}
        onChange={(e) => {
          props.onChange?.(e);
          onCheckedChange?.(e.target.checked);
        }}
        className="sr-only peer"
      />
      <span className="w-10 h-6 rounded-full bg-gray-300 peer-checked:bg-green-500 transition-colors relative">
        <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
      </span>
    </label>
  );
}
