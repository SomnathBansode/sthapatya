"use client";

import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* padding-top to make space for fixed navbar (h-20) */}
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
