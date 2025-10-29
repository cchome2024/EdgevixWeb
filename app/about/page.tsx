import { Users, Target, Award, Rocket, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">關於鋒維科技</h1>
            <p className="text-xl text-white/90 text-pretty">
              我們是一支充滿熱誠的技術團隊，致力為企業提供創新的AI與數碼方案。
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              <h2 className="text-3xl font-bold text-white">公司簡介</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-primary/20">
                <p className="mb-6 text-slate-300 leading-relaxed">
                  鋒維科技成立於2020年，是一家專注於AI技術與數碼轉型的科技顧問公司。我們深信技術的力量能夠改變企業的營運模式，提升效率並締造更大價值。
                </p>
                <p className="mb-6 text-slate-300 leading-relaxed">
                  我們的團隊由經驗豐富的軟件工程師、AI專家及技術顧問組成，擁有深厚的行業經驗與專業知識。我們不只提供技術方案，更重視與客戶建立長期合作關係，成為您值得信賴的技術伙伴。
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-sm text-slate-400">成功個案</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">5年</div>
                    <div className="text-sm text-slate-400">專業經驗</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">98%</div>
                    <div className="text-sm text-slate-400">客戶滿意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">我們的核心價值</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">以專業、創新與誠信為根基，為客戶創造最大價值。</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700 p-8 rounded-2xl border-2 border-slate-600 hover:border-slate-500 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">客戶至上</h3>
              <p className="text-slate-300">以客戶需求為核心，提供最貼合的解決方案。</p>
            </div>

            <div className="bg-slate-700 p-8 rounded-2xl border-2 border-slate-600 hover:border-slate-500 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="h-7 w-7 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">持續創新</h3>
              <p className="text-slate-300">不斷探索新技術，保持技術領先優勢。</p>
            </div>

            <div className="bg-slate-700 p-8 rounded-2xl border-2 border-slate-600 hover:border-slate-500 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">專業品質</h3>
              <p className="text-slate-300">堅持卓越的技術質素與服務承諾。</p>
            </div>

            <div className="bg-slate-700 p-8 rounded-2xl border-2 border-slate-600 hover:border-slate-500 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">團隊合作</h3>
              <p className="text-slate-300">重視團隊協作，匯聚集體智慧。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">我們的團隊</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">專業團隊</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              我們的團隊由各領域的專家組成，為您提供全方位的技術支援。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl ring-4 ring-slate-600/30">
                <span className="text-5xl text-slate-300 font-bold">李</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">李明哲</h3>
              <p className="text-primary font-medium mb-3 text-center">技術總監</p>
              <p className="text-sm text-slate-300 text-center leading-relaxed">15年軟件開發經驗，擅長AI與雲端架構設計。</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl ring-4 ring-slate-600/30">
                <span className="text-5xl text-slate-300 font-bold">陳</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">陳雅婷</h3>
              <p className="text-accent font-medium mb-3 text-center">AI研發主管</p>
              <p className="text-sm text-slate-300 text-center leading-relaxed">機器學習專家，擁有多項AI專利成果。</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl ring-4 ring-slate-600/30">
                <span className="text-5xl text-slate-300 font-bold">王</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">王志宏</h3>
              <p className="text-secondary font-medium mb-3 text-center">項目經理</p>
              <p className="text-sm text-slate-300 text-center leading-relaxed">豐富的項目管理經驗，確保項目準時交付。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
