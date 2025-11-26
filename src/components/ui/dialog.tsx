"use client";

import type { ReactNode, HTMLAttributes, Dispatch, SetStateAction } from "react";

interface DialogProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
}

export function Dialog({ children, open = true, onOpenChange }: DialogProps) {
  if (!open) return null;
  return (
    <div onClick={() => onOpenChange?.(false)} className="fixed inset-0 z-50">
      {children}
    </div>
  );
}

export function DialogContent({ children, className = "" }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40`}>
      <div className={`bg-white rounded-lg shadow-xl max-h-[90vh] overflow-auto ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className = "" }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function DialogDescription({
  children,
  className = "",
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
}
