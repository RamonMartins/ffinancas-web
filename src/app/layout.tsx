// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lexendDeca = localFont({
  src: '../../public/fonts/LexendDeca.ttf',
  display: 'swap',
  variable: '--font-lexend-deca',
});

export const rochester = localFont({
  src: '../../public/fonts/Rochester-Regular.ttf',
  display: 'swap',
  variable: '--font-rochester',
});

export const metadata: Metadata = {
  description: "Seu dashboard financeiro pessoal",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" className={`${lexendDeca.variable} ${rochester.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
