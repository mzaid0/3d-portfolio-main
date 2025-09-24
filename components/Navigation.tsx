"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { navItems } from "@/data/navigation";

interface NavigationProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeSection: string;
}

export function Navigation({
  isDark,
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
}: NavigationProps) {
  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 mx-auto w-full max-w-4xl px-2 sm:px-4"
        style={{ paddingTop: "env(safe-area-inset-top)" }} // Safe area for notched devices
      >
        <div className="flex items-center justify-between px-2 sm:px-4 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-x-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center w-full space-x-2 sm:space-x-4 flex-nowrap">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-xl transition-all duration-300 cursor-pointer text-xs sm:text-sm ${
                  activeSection === item.name.toLowerCase()
                    ? "bg-cyan-500/20 text-cyan-400"
                    : isDark
                    ? "text-white/80 hover:text-cyan-400 hover:bg-white/10"
                    : "text-slate-700 hover:text-cyan-600 hover:bg-white/20"
                }`}
              >
                <item.icon className="w-3 sm:w-4 h-3 sm:h-4" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center space-x-2 w-full justify-between">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
              Shabaan Mehmood
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-4 sm:w-5 h-4 sm:h-5" />
              ) : (
                <Menu className="w-4 sm:w-5 h-4 sm:h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-16 left-2 right-2 sm:left-4 sm:right-4 z-40 lg:hidden"
            style={{ paddingTop: "env(safe-area-inset-top)" }} // Safe area for notched devices
          >
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl max-h-[80vh] overflow-y-auto">
              <div className="space-y-3 sm:space-y-4 flex flex-col items-center">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 p-2 sm:p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer w-full text-center"
                  >
                    <item.icon className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                    <span className="text-white font-medium text-sm sm:text-base flex-1 text-center">
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
