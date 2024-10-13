import type { Metadata } from "next";
import { Suspense } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Starter Boilerplate",
  description:
    "Basic Standardized Boilerplate for Effective Workflow Across Teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="antialiased">
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
