"use client";

import type { InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export function Checkbox({ onCheckedChange, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
      onChange={(e) => {
        props.onChange?.(e);
        onCheckedChange?.(e.target.checked);
      }}
      className={`h-4 w-4 rounded border border-gray-300 text-blue-600 ${props.className ?? ""}`}
    />
  );
}
