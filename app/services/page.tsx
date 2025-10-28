import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Code2, Server, Cloud, Database, Shield, Smartphone, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI智能解決方案",
      description: "提供企業級AI應用開發，包括機器學習、自然語言處理、電腦視覺等技術",
      features: ["智能客服系統", "預測分析模型", "圖像識別應用", "AI數據分析"],
    },
    {
      icon: Code2,
      title: "客製化軟體開發",
      description: "根據企業需求打造專屬軟體系統，從需求分析到系統上線全程支援",
      features: ["Web應用程式開發", "企業管理系統", "電子商務平台", "行動應用開發"],
    },
    {
      icon: Cloud,
      title: "雲端服務整合",
      description: "協助企業遷移至雲端平台，提供雲端架構設計與優化服務",
      features: ["雲端架構設計", "系統遷移服務", "雲端成本優化", "多雲管理方案"],
    },
    {
      icon: Database,
      title: "大數據分析",
      description: "建立數據分析平台，協助企業從數據中挖掘商業價值",
      features: ["數據倉儲建置", "商業智能報表", "即時數據分析", "數據視覺化"],
    },
    {
      icon: Shield,
      title: "資訊安全顧問",
      description: "提供全面的資訊安全評估與防護方案，保護企業數位資產",
      features: ["安全性評估", "滲透測試", "資安教育訓練", "合規性諮詢"],
    },
    {
      icon: Server,
      title: "系統整合服務",
      description: "整合企業內部各系統，提升資訊流通效率與自動化程度",
      features: ["API整合開發", "系統串接服務", "自動化流程", "舊系統現代化"],
    },
    {
      icon: Smartphone,
      title: "行動應用開發",
      description: "開發iOS與Android原生應用，提供優質的行動體驗",
      features: ["iOS應用開發", "Android應用開發", "跨平台開發", "App維護更新"],
    },
    {
      icon: Globe,
      title: "數位轉型諮詢",
      description: "協助企業規劃數位轉型策略，提供技術路線圖與實施建議",
      features: ["數位策略規劃", "技術選型建議", "流程優化諮詢", "變革管理支援"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">專業服務項目</h1>
            <p className="text-xl text-white/90 text-pretty">
              提供全方位的技術服務，從AI應用到系統開發，滿足您的各種需求
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">全方位技術服務</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">從AI應用到系統開發,我們提供專業的技術解決方案</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              const gradients = [
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
                "bg-slate-800 border-slate-600 hover:border-slate-500",
              ]

              const iconColors = [
                "bg-slate-700",
                "bg-slate-700",
                "bg-slate-700",
                "bg-slate-700",
                "bg-slate-700",
                "bg-slate-700",
                "bg-slate-700",
                "bg-slate-700",
              ]

              return (
                <Card
                  key={index}
                  className={`${gradients[index]} border-2 hover:shadow-xl transition-all hover:-translate-y-1`}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 ${iconColors[index]} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="h-8 w-8 text-slate-300" />
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-base text-slate-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300">
                          <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg"
                      asChild
                    >
                      <Link href="/contact">
                        了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-slate-700 p-12 rounded-3xl shadow-xl border border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-white text-balance">找不到您需要的服務?</h2>
            <p className="text-lg text-slate-300 mb-8 text-pretty leading-relaxed">
              我們提供客製化的解決方案,歡迎與我們聯繫討論您的需求
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 text-white shadow-lg px-8"
              asChild
            >
              <Link href="/contact">
                立即諮詢 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
