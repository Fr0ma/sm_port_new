import Link from 'next/link'
import { Inter, Noto_Serif_KR } from 'next/font/google'
import './globals.css'
import { Linkedin, Mail, Phone } from 'lucide-react';


const inter = Inter({ subsets: ['latin'] })
const notoSerifKr = Noto_Serif_KR({ 
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-noto-serif-kr',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSerifKr.variable}`}>
      <body className={`${inter.className} relative bg-[#f0f0f0] text-[#333] min-h-screen`}>
        <header className="relative text-center py-12 z-10 bg-white shadow-md">
          <h1 className={`${notoSerifKr.className} text-6xl font-bold text-[#333]`}>
            Seongmin Lee
          </h1>
          <nav className="mt-8">
            <ul className="flex justify-center space-x-8">
              <li>
                <Link href="/" className={`${notoSerifKr.className} text-lg font-bold hover:text-[#007bff] transition-colors`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`${notoSerifKr.className} text-lg font-bold hover:text-[#007bff] transition-colors`}>
                  About me
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`${notoSerifKr.className} text-lg font-bold hover:text-[#007bff] transition-colors`}>
                  Project
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${notoSerifKr.className} text-lg font-bold hover:text-[#007bff] transition-colors`}>
                  SKills
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-900 text-white py-8 font-serif">
          <div className="flex justify-center space-x-8">
            <Link href="https://linkedin.com">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:dltjdals0308@naver.com">
              <Mail className="w-6 h-6" />
                      </Link>
          </div>
          <div className="text-center mt-4">
                      <p className="font-extrabold">© 2024 Lee Seongmin. All rights reserved.</p>
                      <p className="mt-2">contact: +82 010-9830-0308</p>
          </div>
        </footer>
      </body>
    </html>
  )
}