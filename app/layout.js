import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";



export const metadata = {
  title: "Mini Blog",
  description: "A tiny Next JS log explorer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-cyan-900">
        <header className="border-b bg-white">
          <div className="max-w-3xl mx-auto p-4 flex items-center justify-between">

            <Link href="/" className="font-semibold text-lg">Mini Blog</Link>
            <nav className="space-x-4 text-sm">
              <Link href="/">Home</Link>
              <a 
              href="https://jsonplaceholder.typicode.com/" 
              target="_blank"
              rel="noreferrer"
              className="underline" >
                API </a>
            </nav>

 
          </div>

        </header>
        <main className="max-w-3xl mx-auto -4">{children}</main>
        
      </body>
    </html>
  );
}
