import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "鋒維科技 - AI與數位轉型專家",
  description: "專業的AI顧問、軟體開發與硬體技術服務，助您在數位時代脫穎而出",
  keywords: "AI顧問, 科技服務, 數位轉型, 軟體開發, 雲解決方案, 商業AI解決方案",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
