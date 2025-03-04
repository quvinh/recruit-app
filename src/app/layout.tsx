"use client";

import React from "react";
import Link from "next/link";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <SessionProvider>
          <div>
            <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
              <nav>
                <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
                <Link href="/login">Login</Link> |{" "}
                <Link href="/register">Register</Link>
              </nav>
            </header>
            <main style={{ padding: "1rem" }}>{children}</main>
            <footer style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
              © 2025 My Website
            </footer>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
