'use client';
import '../styles/globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://code.tidio.co/8nfvs8polg4lrqlkicel0meee201dtve.js"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
