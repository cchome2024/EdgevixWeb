import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, ShoppingCart, Heart, GraduationCap, TrendingUp, CheckCircle2 } from "lucide-react"

export default function CasesPage() {
  const cases = [
    {
      icon: Building2,
      company: "某大型製造企業",
      industry: "製造業",
      title: "智能工廠數位轉型",
      challenge: "傳統製造流程效率低下，缺乏即時數據監控，難以快速應對市場變化",
      solution: "導入AI視覺檢測系統、IoT設備監控平台，建立即時數據分析儀表板，實現生產流程自動化與智能化管理",
      results: ["生產效率提升40%", "不良品率降低65%", "設備維護成本減少30%", "ROI在18個月內回收"],
      tags: ["AI", "物聯網", "數據分析", "自動化"],
    },
    {
      icon: ShoppingCart,
      company: "知名電商平台",
      industry: "電子商務",
      title: "智能推薦系統開發",
      challenge: "用戶轉換率低，商品推薦不精準，無法有效提升客戶購買意願",
      solution: "開發基於機器學習的個性化推薦引擎，整合用戶行為分析與商品標籤系統，提供即時精準推薦",
      results: ["轉換率提升55%", "平均訂單金額增加35%", "用戶停留時間延長2倍", "客戶滿意度提升至92%"],
      tags: ["機器學習", "推薦系統", "大數據", "Web開發"],
    },
    {
      icon: Heart,
      company: "醫療科技公司",
      industry: "醫療健康",
      title: "智能診斷輔助系統",
      challenge: "醫療影像判讀耗時，診斷準確度依賴醫師經驗，需要提升診斷效率與準確性",
      solution: "建立深度學習影像識別模型，開發醫療影像分析平台，提供AI輔助診斷建議與病歷管理系統",
      results: ["診斷時間縮短70%", "準確率達到95%以上", "每日處理量增加3倍", "獲得醫療器材認證"],
      tags: ["深度學習", "電腦視覺", "醫療AI", "雲端平台"],
    },
    {
      icon: GraduationCap,
      company: "線上教育平台",
      industry: "教育科技",
      title: "個性化學習系統",
      challenge: "學生學習進度不一，難以提供個性化教學內容，學習成效追蹤不完善",
      solution: "開發AI驅動的自適應學習平台，根據學生表現動態調整課程難度，提供個性化學習路徑與即時反饋",
      results: ["學習成效提升60%", "學生完課率提高45%", "教師工作效率提升50%", "用戶續訂率達85%"],
      tags: ["教育科技", "AI", "數據分析", "行動應用"],
    },
    {
      icon: TrendingUp,
      company: "金融服務公司",
      industry: "金融科技",
      title: "智能風控系統",
      challenge: "傳統風控模型反應慢，無法即時識別異常交易，風險管理成本高",
      solution: "建立即時風險評估引擎，整合多維度數據源，運用機器學習進行異常檢測與風險預測",
      results: ["欺詐檢測率提升80%", "誤報率降低60%", "審核時間縮短至秒級", "年度損失減少千萬元"],
      tags: ["金融科技", "風控", "機器學習", "即時系統"],
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">成功案例</h1>
            <p className="text-xl text-white/90 text-pretty">
              看看我們如何協助各行業客戶實現數位轉型，創造實質商業價值
            </p>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">客戶成功故事</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">真實案例見證我們的專業實力與服務品質</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {cases.map((caseItem, index) => {
              const Icon = caseItem.icon
              const accentColors = [
                {
                  bg: "bg-slate-800",
                  icon: "bg-slate-700",
                  badge: "bg-slate-600/50 text-slate-200 border-slate-500",
                },
                {
                  bg: "bg-slate-800",
                  icon: "bg-slate-700",
                  badge: "bg-slate-600/50 text-slate-200 border-slate-500",
                },
                {
                  bg: "bg-slate-800",
                  icon: "bg-slate-700",
                  badge: "bg-slate-600/50 text-slate-200 border-slate-500",
                },
                {
                  bg: "bg-slate-800",
                  icon: "bg-slate-700",
                  badge: "bg-slate-600/50 text-slate-200 border-slate-500",
                },
                {
                  bg: "bg-slate-800",
                  icon: "bg-slate-700",
                  badge: "bg-slate-600/50 text-slate-200 border-slate-500",
                },
              ]

              const colors = accentColors[index]

              return (
                <Card
                  key={index}
                  className="border-2 border-slate-700 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 bg-slate-800"
                >
                  <CardHeader className="bg-slate-700 pb-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="h-7 w-7 text-slate-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <CardTitle className="text-2xl text-white">{caseItem.company}</CardTitle>
                          <Badge className={`${colors.badge} border`}>{caseItem.industry}</Badge>
                        </div>
                        <CardDescription className="text-lg font-semibold text-primary">
                          {caseItem.title}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-8 bg-slate-800">
                    <div className="space-y-6">
                      <div className="bg-red-500/10 p-6 rounded-xl border-l-4 border-red-500">
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full" />
                          挑戰
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{caseItem.challenge}</p>
                      </div>

                      <div className="bg-blue-500/10 p-6 rounded-xl border-l-4 border-blue-500">
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full" />
                          解決方案
                        </h4>
                        <p className="text-slate-300 leading-relaxed">{caseItem.solution}</p>
                      </div>

                      <div className="bg-green-500/10 p-6 rounded-xl border-l-4 border-green-500">
                        <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                          成果
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {caseItem.results.map((result, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-slate-700 p-3 rounded-lg">
                              <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {caseItem.tags.map((tag, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-primary/40 text-primary bg-primary/10 px-3 py-1"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">客戶評價</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-slate-700 bg-slate-700 hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className="text-4xl text-slate-400 mb-4">"</div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">
                    鋒維科技的專業團隊協助我們成功導入AI系統,不僅提升了生產效率,更為我們開創了新的商業模式。他們的技術實力與服務態度都令人印象深刻。
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">張</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">張總經理</p>
                      <p className="text-sm text-slate-400">某製造企業</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 bg-slate-700 hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className="text-4xl text-slate-400 mb-4">"</div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">
                    從需求分析到系統上線,鋒維科技都展現出高度的專業性。他們不只是技術供應商,更是我們的策略夥伴,真正理解我們的業務需求。
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">林</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">林執行長</p>
                      <p className="text-sm text-slate-400">電商平台</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
