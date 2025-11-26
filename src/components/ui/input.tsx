"use client";

import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`border rounded-md px-3 py-2 shadow-sm ${props.className ?? ""}`}
    />
  );
}
