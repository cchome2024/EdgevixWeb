import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "鋒維科技 - AI與數碼轉型專家",
  description: "專業的AI顧問、軟件開發與硬件技術服務，助您在數碼時代脫穎而出",
  keywords: "AI顧問, 科技服務, 數碼轉型, 軟件開發, 雲端方案, 商業AI方案",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
