import type { Metadata } from "next";
import "@/styles/css/style.css";

export const metadata: Metadata = {
  title: "John Lloyd Martinez",
  description: "Designed and developed by John Lloyd Martinez",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
