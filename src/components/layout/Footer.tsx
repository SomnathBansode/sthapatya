"use client";

import { useThemeColors } from "@/hooks/useThemeColors";

export function Footer() {
  const { colors } = useThemeColors();

  return (
    <footer
      className="py-6 border-t-2"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.primary,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p
          className="text-center text-sm"
          style={{ color: colors.textLight }}
        >
          © 2025 Sthapatya Consultants India Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
