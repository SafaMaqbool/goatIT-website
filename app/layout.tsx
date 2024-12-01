import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; // Adjust the path to where your Navbar is located
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  display: 'swap',
  variable: '--font-geist-sans'
});

export const metadata: Metadata = {
  title: 'Goat IT Consulting',
  description: 'IT Services and IT Consulting'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
