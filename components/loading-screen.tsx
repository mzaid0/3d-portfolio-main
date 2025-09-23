"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingCanvas from "./LoadingCanvas";

function ProgressRing({ progress }: { progress: number }) {
  const circumference = 2 * Math.PI * 60;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-[20vmin] h-[20vmin]">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
        <circle
          cx="70"
          cy="70"
          r="60"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
          fill="none"
        />
        <motion.circle
          cx="70"
          cy="70"
          r="60"
          stroke="url(#progressGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ filter: "drop-shadow(0 0 10px #ffffff40)" }}
        />
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-[4vmin] font-bold text-white"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </div>
  );
}

const loadingMessages = [
  "Launching Next.js application...",
  "Connecting to Supabase backend...",
  "Initializing Redis cache system...",
  "Deploying with Docker containers...",
  "Syncing real-time caregiving modules...",
  "Fetching AI-driven insights from Gemini...",
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 100);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <LoadingCanvas />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Brand Initials - MZ for Muhammad Zaid */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-[2vmin]"
          >
            <div className="relative w-[10vmin] h-[10vmin] mx-auto mb-[2vmin]">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center shadow-2xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="text-[4vmin] font-bold text-black"
                >
                  MZ
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Progress Ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-[2vmin]"
          >
            <ProgressRing progress={progress} />
          </motion.div>

          {/* Dynamic Loading Message */}
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-[2vmin]"
          >
            <p className="text-[3vmin] text-white/80 font-medium">
              {loadingMessages[messageIndex]}
            </p>
          </motion.div>

          {/* Final Welcome Message */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                  className="text-[3vmin] font-bold text-white mb-[2vmin]"
                >
                  Welcome to Zaid's Techverse
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
