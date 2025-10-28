import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Code, Lightbulb, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-digital-pattern.png')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              引領企業數位轉型
              <br />
              開創AI智能未來
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 text-pretty">
              鋒維科技提供專業的AI顧問、軟體開發與硬體技術服務，助您在數位時代脫穎而出
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/contact">
                  立即聯絡 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                asChild
              >
                <Link href="/services">了解更多</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">為什麼選擇鋒維科技</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我們結合創新技術與專業經驗，為企業提供全方位的數位解決方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI智能解決方案</h3>
              <p className="text-muted-foreground">運用最新AI技術，為您的業務提供智能化升級與自動化解決方案</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">專業軟體開發</h3>
              <p className="text-muted-foreground">客製化軟體開發服務，從需求分析到系統部署，全程專業支援</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">技術顧問服務</h3>
              <p className="text-muted-foreground">資深技術團隊提供專業諮詢，協助企業制定最佳技術策略</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">持續成長支援</h3>
              <p className="text-muted-foreground">提供長期技術支援與系統維護，確保您的業務持續穩定成長</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-balance">
              準備好開始您的數位轉型之旅了嗎？
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              讓鋒維科技成為您的技術夥伴，共同打造智能化的未來
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/contact">
                免費諮詢 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
