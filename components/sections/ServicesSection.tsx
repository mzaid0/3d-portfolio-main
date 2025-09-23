"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"

interface ServicesSectionProps {
  isDark: boolean
}

export function ServicesSection({ isDark }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
            Services
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-white/80" : "text-slate-700"}`}>
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full hover:border-cyan-400/30 transition-all duration-300">
                <CardContent className="p-0">
                  {/* Icon */}
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-slate-500 rounded-xl w-fit mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`}>
                    {service.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${isDark ? "text-white/70" : "text-slate-600"}`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className={`text-sm ${isDark ? "text-white/80" : "text-slate-700"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-slate-600 hover:from-cyan-600 hover:to-slate-700 text-white border-0 py-3 rounded-xl font-semibold">
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
