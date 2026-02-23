"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
    return (
        <main className="min-h-screen pt-20 flex flex-col items-center justify-center bg-[#0a0a0a] text-center px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-2xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="w-20 h-20 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#d4af37]/5 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                        <span className="text-3xl text-[#d4af37] font-serif italic">Z</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-4xl md:text-6xl font-serif tracking-tight text-luxury mb-4"
                >
                    Welcome to the Club
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-luxury text-sm tracking-[0.2em] opacity-50 uppercase mb-12 max-w-lg mx-auto leading-loose"
                >
                    Your bespoke commission has been secured. A personal Zenith concierge will contact you within 24 hours to begin the artisan journey.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-[#d4af37] hover:text-white transition-all group">
                        <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        Download Build Sheet
                    </button>

                    <Link href="/" className="px-8 py-4 border border-white/10 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white/5 transition-all flex items-center justify-center">
                        Return to Gallery
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="mt-20 flex items-center justify-center gap-3 text-[#d4af37]"
                >
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] tracking-[0.4em] uppercase opacity-80">Reference: #Z-PHANTOM-BW-2026</span>
                </motion.div>
            </motion.div>
        </main>
    );
}
