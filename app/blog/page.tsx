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
      excerpt: "探討人工智慧技術在現代企業中的應用，從自動化流程到智能決策支援，AI正在重塑各行各業的營運方式...",
      category: "AI技術",
      date: "2025年1月15日",
      readTime: "8分鐘",
      image: "/ai-technology-business.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "雲端遷移：企業數位轉型的關鍵一步",
      excerpt: "了解如何規劃與執行雲端遷移策略，避免常見陷阱，確保平穩過渡到雲端環境...",
      category: "雲端技術",
      date: "2025年1月12日",
      readTime: "6分鐘",
      image: "/cloud-migration-technology.jpg",
    },
    {
      id: 3,
      title: "機器學習模型部署最佳實踐",
      excerpt: "從開發到生產環境，分享機器學習模型部署的實用技巧與注意事項...",
      category: "機器學習",
      date: "2025年1月10日",
      readTime: "10分鐘",
      image: "/machine-learning-deployment.jpg",
    },
    {
      id: 4,
      title: "資訊安全：保護企業數位資產的策略",
      excerpt: "在數位化時代，資訊安全變得前所未有的重要。本文探討企業應該採取的安全措施...",
      category: "資訊安全",
      date: "2025年1月8日",
      readTime: "7分鐘",
      image: "/cybersecurity-protection.png",
    },
    {
      id: 5,
      title: "大數據分析：從數據中挖掘商業價值",
      excerpt: "學習如何建立有效的數據分析流程，將原始數據轉化為可執行的商業洞察...",
      category: "數據分析",
      date: "2025年1月5日",
      readTime: "9分鐘",
      image: "/big-data-analytics.png",
    },
    {
      id: 6,
      title: "敏捷開發方法論在企業中的實踐",
      excerpt: "探討如何在企業環境中成功導入敏捷開發方法，提升團隊協作效率與產品品質...",
      category: "軟體開發",
      date: "2025年1月3日",
      readTime: "5分鐘",
      image: "/agile-development-team.jpg",
    },
  ]

  const categories = ["全部", "AI技術", "雲端技術", "機器學習", "資訊安全", "數據分析", "軟體開發"]
  const recentPosts = posts.slice(0, 5)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">技術部落格</h1>
            <p className="text-xl text-white/90 text-pretty">分享最新的技術趨勢、產業洞察與實務經驗</p>
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
              {posts[0] && (
                <Card className="border-2 border-primary/30 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 bg-slate-800">
                  <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-primary/20 dark:to-primary/10">
                    <img
                      src={`${posts[0].image}?height=400&width=800&query=AI technology in business`}
                      alt={posts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-accent to-orange-600 text-white border-0 shadow-lg">
                      <Sparkles className="h-3 w-3 mr-1" />
                      精選文章
                    </Badge>
                  </div>
                  <CardHeader className="bg-slate-700">
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3 flex-wrap">
                      <Badge className="bg-primary text-white">{posts[0].category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {posts[0].date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {posts[0].readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-white hover:text-primary transition-colors">
                      <Link href={`/blog/${posts[0].id}`}>{posts[0].title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base text-slate-300 leading-relaxed">
                      {posts[0].excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Button
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg"
                      asChild
                    >
                      <Link href={`/blog/${posts[0].id}`}>
                        閱讀更多 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Regular Posts */}
              <div className="space-y-6">
                {posts.slice(1).map((post, index) => {
                  const colors = [
                    {
                      gradient: "from-slate-700 to-slate-800",
                      badge: "bg-slate-600 text-slate-200",
                    },
                    {
                      gradient: "from-slate-700 to-slate-800",
                      badge: "bg-slate-600 text-slate-200",
                    },
                    {
                      gradient: "from-slate-700 to-slate-800",
                      badge: "bg-slate-600 text-slate-200",
                    },
                    {
                      gradient: "from-slate-700 to-slate-800",
                      badge: "bg-slate-600 text-slate-200",
                    },
                    {
                      gradient: "from-slate-700 to-slate-800",
                      badge: "bg-slate-600 text-slate-200",
                    },
                  ]
                  const color = colors[index % colors.length]

                  return (
                    <Card
                      key={post.id}
                      className="border-2 border-slate-700 hover:shadow-xl transition-all hover:-translate-y-1 bg-slate-800"
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className={`relative h-48 md:h-full bg-gradient-to-br ${color.gradient}`}>
                          <img
                            src={`${post.image}?height=300&width=400&query=${post.category}`}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center gap-4 text-sm text-slate-400 mb-3 flex-wrap">
                            <Badge className={color.badge}>{post.category}</Badge>
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
                              閱讀更多 <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="text-white flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-slate-400" />
                    文章分類
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      return (
                        <Button
                          key={category}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 bg-transparent transition-all"
                        >
                          {category}
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="flex items-center gap-2 text-white">
                    <TrendingUp className="h-5 w-5 text-slate-400" />
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

              {/* Newsletter */}
              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Zap className="h-5 w-5 text-slate-400" />
                    訂閱電子報
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    訂閱我們的電子報,獲取最新技術文章與產業資訊
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

              {/* Social Links */}
              <Card className="border-2 border-slate-700 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="text-white">關注我們</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Button size="icon" className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </Button>
                    <Button size="icon" className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Button>
                    <Button size="icon" className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Button>
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
