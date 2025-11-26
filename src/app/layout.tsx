
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Sthapatya",
  description: "Municipal services and smart governance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
