import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, TrendingUp, Sparkles, Zap, BookOpen } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "AI技術如何改變企業營運模式",
      excerpt: "探討人工智慧在現代企業中的應用，從自動化流程到智能決策支援，AI正重塑各行各業的營運模式...",
      category: "AI技術",
      date: "2025年5月5日",
      readTime: "8分鐘",
      image: "/ai-technology-business.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "雲端遷移：企業數碼轉型的關鍵一步",
      excerpt: "了解如何規劃與執行雲端遷移策略，避免常見陷阱，確保順利過渡到雲端環境...",
      category: "雲端技術",
      date: "2025年4月22日",
      readTime: "6分鐘",
      image: "/cloud-migration-technology.jpg",
    },
    {
      id: 3,
      title: "機器學習模型部署最佳實務",
      excerpt: "從開發到生產環境，分享機器學習模型部署的實用技巧與注意事項...",
      category: "機器學習",
      date: "2025年3月10日",
      readTime: "10分鐘",
      image: "/machine-learning-deployment.jpg",
    },
    {
      id: 4,
      title: "資訊安全：保護企業數碼資產的策略",
      excerpt: "在數碼化時代，資訊安全變得前所未有的重要。本文探討企業應該採取的安全措施...",
      category: "資訊安全",
      date: "2025年2月28日",
      readTime: "7分鐘",
      image: "/cybersecurity-protection.png",
    },
    {
      id: 5,
      title: "大數據分析：從數據中挖掘商業價值",
      excerpt: "學習如何建立有效的數據分析流程，將原始數據轉化為可執行的商業洞察...",
      category: "數據分析",
      date: "2025年2月12日",
      readTime: "9分鐘",
      image: "/big-data-analytics.png",
    },
    {
      id: 6,
      title: "敏捷開發方法在企業中的實踐",
      excerpt: "探討如何在企業環境中成功導入敏捷開發方法，提升團隊協作效率與產品質素...",
      category: "軟件開發",
      date: "2025年1月18日",
      readTime: "5分鐘",
      image: "/agile-development-team.jpg",
    },
  ]

  const categories = ["全部", "AI技術", "雲端技術", "機器學習", "資訊安全", "數據分析", "軟件開發"]
  const recentPosts = posts.slice(0, 5)
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">技術博客</h1>
            <p className="text-xl text-white/90 text-pretty">分享最新技術趨勢、行業洞察與實戰經驗</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              {featuredPost && (
                <Card className="border-2 border-primary/30 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 bg-slate-800">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-primary/20 dark:to-primary/10">
                    <img
                      src={`${featuredPost.image}?height=400&width=800&query=AI technology in business`}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-accent to-orange-600 text-white border-0 shadow-lg">
                      <Sparkles className="h-3 w-3 mr-1" />
                      精選文章
                    </Badge>
                  </div>
                  <CardHeader className="bg-slate-700">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3 flex-wrap">
                      <Badge className="bg-primary text-white">{featuredPost.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-white hover:text-primary transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base text-slate-300 leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Button
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg"
                      asChild
                    >
                      <Link href={`/blog/${featuredPost.id}`}>
                        了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Regular Posts */}
              <div className="space-y-6">
                {regularPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="border-2 border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-800"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative h-48 md:h-full bg-gradient-to-br from-slate-700 to-slate-800">
                        <img
                          src={`${post.image}?height=300&width=400&query=${post.category}`}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3 flex-wrap">
                          <Badge className="bg-slate-600/70 text-slate-200 border-slate-500">{post.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-slate-300 mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                        <Button
                          variant="ghost"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto"
                          asChild
                        >
                          <Link href={`/blog/${post.id}`}>
                            了解更多 <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="text-white">熱門主題</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="border-primary/40 text-primary bg-primary/10 px-4 py-2"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BookOpen className="h-5 w-5 text-slate-400" />
                    最新文章
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="block group p-3 rounded-lg hover:bg-accent/10 transition-all"
                      >
                        <h4 className="font-medium text-sm mb-1 text-white group-hover:text-accent transition-colors line-clamp-2 leading-relaxed">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-400">{post.date}</p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Zap className="h-5 w-5 text-slate-400" />
                    訂閱電子通訊
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    訂閱我們的電子通訊，獲取最新技術文章與行業資訊
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg border-2 border-accent/30 bg-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                    />
                    <Button className="w-full bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 text-white shadow-lg">
                      訂閱
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="text-white">關注我們</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    {Array.from({ length: 3 }).map((_, idx) => (
                      <Button
                        key={idx}
                        size="icon"
                        className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </Button>
                    ))}
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
