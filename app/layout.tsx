import { ThemeProvider } from '@/app/provider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; // Adjust the path to where your Navbar is located
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar /> {/* Add Navbar here */}
          <main>
            {children} {/* Render children below the Navbar */}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
