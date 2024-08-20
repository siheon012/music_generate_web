'use client';
import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import '../globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[url('/headerd.jpg')] bg-no-repeat bg-center bg-cover min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
      <Footer />
    </html>
  );
}
