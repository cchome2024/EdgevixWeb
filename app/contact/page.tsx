"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", email: "", phone: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">聯絡我們</h1>
            <p className="text-xl text-white/90 text-pretty">有任何問題或需求？歡迎與我們聯繫，我們將盡快回覆您</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/20 shadow-xl bg-slate-800">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="text-2xl text-white">發送訊息</CardTitle>
                  <CardDescription className="text-slate-300">填寫以下表單,我們會在24小時內回覆您</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                        姓名 *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="請輸入您的姓名"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                        電子郵件 *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                        聯絡電話
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0912-345-678"
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                        訊息內容 *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="請描述您的需求或問題..."
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-accent to-orange-600 hover:from-accent/90 hover:to-orange-600/90 text-white shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "發送中..."
                      ) : (
                        <>
                          發送訊息 <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    {submitStatus === "success" && (
                      <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-sm text-green-400 font-medium">✓ 訊息已成功發送！我們會盡快與您聯繫。</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">聯絡資訊</h2>
                <div className="space-y-4">
                  <Card className="border-2 border-slate-600 bg-slate-800 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-slate-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">電子郵件</h3>
                          <p className="text-slate-300">info@fengwei-tech.com</p>
                          <p className="text-slate-300">support@fengwei-tech.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-600 bg-slate-800 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-slate-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">聯絡電話</h3>
                          <p className="text-slate-300 font-medium">+886-2-1234-5678</p>
                          <p className="text-sm text-slate-400 mt-1 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            週一至週五 09:00-18:00
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-600 bg-slate-800 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-slate-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-white">公司地址</h3>
                          <p className="text-slate-300 leading-relaxed">
                            台北市信義區信義路五段7號
                            <br />
                            台北101大樓 35樓
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map */}
              <Card className="border-2 border-primary/10 overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0022857956944!2d121.56347931500658!3d25.033408983970744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2sTaipei%20101!5e0!3m2!1sen!2stw!4v1234567890123!5m2!1sen!2stw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="border-2 border-primary/20 bg-slate-800 shadow-lg">
                <CardHeader className="bg-slate-700">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Clock className="h-5 w-5 text-secondary" />
                    營業時間
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                      <span className="text-slate-300 font-medium">週一至週五</span>
                      <span className="font-semibold text-white">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-slate-300 font-medium">週六</span>
                      <span className="font-semibold text-white">10:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                      <span className="text-slate-300 font-medium">週日及國定假日</span>
                      <span className="font-semibold text-white">公休</span>
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
