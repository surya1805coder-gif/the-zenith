"use client";

import { motion } from "framer-motion";

export default function LuxuryLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
            <div className="relative">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-24 h-24 rounded-full border border-[#d4af37]/20 flex items-center justify-center"
                >
                    <span className="text-2xl text-[#d4af37] font-serif italic">Z</span>
                </motion.div>

                {/* Spinner ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-t border-[#d4af37]/40 rounded-full"
                />
            </div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-luxury text-[10px] tracking-[0.5em] text-[#d4af37] uppercase"
            >
                Preparing your Atelier...
            </motion.p>
        </motion.div>
    );
}
