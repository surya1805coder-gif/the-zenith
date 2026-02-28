"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useConfigStore } from "@/store/useConfigStore";

export default function AiConcierge() {
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const setPaintColor = useConfigStore((state) => state.setPaintColor);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const query = input.toLowerCase();

        // NLP Logic: Targeting specific keywords for car paint
        if (query.includes("stealth") || query.includes("dark") || query.includes("batman") || query.includes("night")) {
            setPaintColor("#000000", 0);
        } else if (query.includes("forest") || query.includes("nature") || query.includes("money") || query.includes("emerald")) {
            setPaintColor("#046307", 5000);
        } else if (query.includes("rich") || query.includes("luxury") || query.includes("king") || query.includes("gold")) {
            setPaintColor("#D4AF37", 12000);
        }

        setInput("");
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 p-4 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest">AI Concierge</h3>
                                <p className="text-white/40 text-[10px]">How can I customize your Zenith today?</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="e.g. 'Make it look stealthy' or 'I want emerald green'"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all font-light"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-lg hover:scale-105 active:scale-95 transition-all group"
                            >
                                <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-black/20 backdrop-blur-md border border-white/5 py-3 rounded-full flex items-center justify-center gap-3 group hover:bg-black/40 transition-all border-white/10"
            >
                <Sparkles className={`w-4 h-4 text-white ${isOpen ? 'animate-pulse' : ''}`} />
                <span className="text-white/60 text-[11px] uppercase tracking-[0.3em] font-medium group-hover:text-white transition-colors">
                    {isOpen ? "Close Concierge" : "Talk to AI Concierge"}
                </span>
            </button>
        </div>
    );
}
