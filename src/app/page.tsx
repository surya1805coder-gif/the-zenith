"use client";

import { motion } from "framer-motion";
import AiConcierge from "@/components/chat/AiConcierge";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-luxury text-sm tracking-[0.3em] mb-4 opacity-60"
        >
          Redefining Automotive Excellence
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-light tracking-tighter text-luxury mb-8"
        >
          The Zenith
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex space-x-4 justify-center"
        >
          <button className="px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-opacity-90 transition-all">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-white/20 text-white text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all">
            Bespoke Atelier
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-20" />
      </motion.div>

      <AiConcierge />
    </main>
  );
}

