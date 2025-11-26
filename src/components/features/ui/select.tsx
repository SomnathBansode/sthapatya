"use client";

import type { CSSProperties, ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface SelectContextValue {
  value: string;
  setValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  placeholder?: string;
}

const SelectContext = createContext<SelectContextValue | null>(null);

const useSelectContext = () => {
  const ctx = useContext(SelectContext);
  if (!ctx) {
    throw new Error("Select components must be used within a <Select> parent");
  }
  return ctx;
};

interface SelectProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Select({
  children,
  value,
  defaultValue = "",
  onValueChange,
  className = "",
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleValueChange = (nextValue: string) => {
    setInternalValue(nextValue);
    onValueChange?.(nextValue);
    setOpen(false);
  };

  const ctxValue = useMemo<SelectContextValue>(
    () => ({
      value: value ?? internalValue,
      setValue: handleValueChange,
      open,
      setOpen,
    }),
    [value, internalValue, open, handleValueChange]
  );

  return (
    <SelectContext.Provider value={ctxValue}>
      <div className={`relative ${className}`}>{children}</div>
    </SelectContext.Provider>
  );
}

interface TriggerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function SelectTrigger({ children, className = "", style }: TriggerProps) {
  const ctx = useSelectContext();

  return (
    <button
      type="button"
      onClick={() => ctx.setOpen(!ctx.open)}
      className={`flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-left text-sm shadow-sm ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

interface ValueProps {
  placeholder?: string;
}

export function SelectValue({ placeholder }: ValueProps) {
  const { value } = useSelectContext();
  return (
    <span className="truncate text-sm">
      {value || placeholder || "Select"}
    </span>
  );
}

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export function SelectContent({ children, className = "" }: ContentProps) {
  const ctx = useSelectContext();

  return (
    <AnimatePresence>
      {ctx.open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className={`absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

export function SelectItem({ value, children, className = "" }: ItemProps) {
  const ctx = useSelectContext();
  const isSelected = ctx.value === value;

  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-100 ${className}`}
      aria-pressed={isSelected}
    >
      {children}
      {isSelected && (
        <span className="ml-auto text-[11px] font-semibold text-slate-500">
          Selected
        </span>
      )}
    </button>
  );
}
