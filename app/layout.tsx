import '../styles/globals.css';
import { Poppins} from 'next/font/google';
import type { Metadata } from "next";
import { ThemeProvider } from '../context/ThemeContext';
import {author, book} from "@/data/content";


export const metadata: Metadata = {
  title: `${author.firstName} ${author.lastName}`,
  description: `${book.title}`,
  icons: {
    icon: '/favicon.png',
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
