import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Embedil — ESP32 & native ESP-IDF",
  description:
    "Embedil builds on ESP32 microcontrollers with the native ESP-IDF framework.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased">{children}</body>
    </html>
  );
}
