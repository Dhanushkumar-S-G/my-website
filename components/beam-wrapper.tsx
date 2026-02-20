"use client"

import { ReactNode, useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

interface ScrollBeamProps {
  children: ReactNode
}

export function ScrollBeam({ children }: ScrollBeamProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  })

  return (
    <div ref={ref} className="relative flex">
      
      {/* LEFT COLUMN */}
      <div className="relative w-16 flex justify-center">
        <svg
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
        className="absolute top-0 bottom-0 h-full w-6"
        >
        {/* Background faint line */}
        <path
            d="M20 0 L20 750 L14 820 L14 1000"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            fill="none"
        />

        {/* Animated gradient line */}
        <motion.path
            d="M20 0 L20 750 L14 820 L14 1000"
            stroke="url(#beamGradient)"
            strokeWidth="1.5"
            fill="none"
            style={{ pathLength }}
        />

        <defs>
            <linearGradient id="beamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="60%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
        </defs>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="flex-1 pl-6">
        {children}
      </div>
    </div>
  )
}