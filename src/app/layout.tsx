import type { Metadata } from "next";
import "@/styles/css/style.css";

export const metadata: Metadata = {
  title: "John Lloyd Martinez",
  description: "Designed and developed by John Lloyd Martinez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
