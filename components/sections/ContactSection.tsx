"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

interface ContactSectionProps {
  isDark: boolean
}

export function ContactSection({ isDark }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shabaan.mehmood@gmail.com",
      href: "mailto:shabaan.mehmood@gmail.com",
    },
    { icon: Phone, label: "Phone", value: "+49 176 14657631", href: "tel:+4917614657631" },
    { icon: MapPin, label: "Location", value: "Bamberg, Germany", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/shabaanmehmood", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shabaan-meh/", label: "LinkedIn" },
    { icon: Mail, href: "shabaan.mehmood@gmail.com", label: "Email" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-white/80" : "text-slate-700"}`}>
            Ready to bring your vision to life? Let's start a conversation about your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className={`text-3xl font-bold mb-8 ${isDark ? "text-white" : "text-slate-800"}`}>Get In Touch</h3>

            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-slate-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className={`text-sm ${isDark ? "text-white/60" : "text-slate-600"}`}>{contact.label}</p>
                  <p className={`text-sm font-medium ${isDark ? "text-white" : "text-slate-800"}`}>{contact.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="flex space-x-4 pt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:border-cyan-400/30 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400 h-14 rounded-xl"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400 h-14 rounded-xl"
                    />
                  </div>

                  <Input
                    placeholder="Subject"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400 h-14 rounded-xl"
                  />

                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-400 rounded-xl resize-none"
                  />

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0 py-4 rounded-xl text-lg font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
