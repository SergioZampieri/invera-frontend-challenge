import './globals.css';
import { AppProvider } from '@/providers/providers';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import React from 'react';

const sora = Sora({
  subsets: ['latin'],
  weight: '400',
  display: 'optional'
});

export const metadata: Metadata = {
  title: 'Invera Frontend Challente',
  description: 'Propuesta de solución al challenge de Invera',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${sora.className} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
