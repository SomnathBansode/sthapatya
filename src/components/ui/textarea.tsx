"use client";

import type { TextareaHTMLAttributes } from "react";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`border rounded-md px-3 py-2 shadow-sm ${props.className ?? ""}`}
    />
  );
}
