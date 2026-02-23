"use client";

import { motion } from "framer-motion";
import { useConfigStore } from "@/store/useConfigStore";
import SceneContainer from "@/components-3d/canvas/SceneContainer";

const PAINT_COLLECTION = [
    { name: "Midnight", color: "#000000", fee: 0 },
    { name: "Silver", color: "#c0c0c0", fee: 12000 },
    { name: "Gold", color: "#d4af37", fee: 25000 },
    { name: "Emerald", color: "#004d3d", fee: 18000 },
];

export default function ConfiguratorPage() {
    const { currentModel, paintColor, totalPrice, setPaintColor } = useConfigStore();

    return (
        <main className="min-h-screen flex flex-col md:flex-row overflow-hidden pt-20">
            {/* Left Side: 3D Preview (Automatic via Layout SceneContainer, but here we can add overlays) */}
            <div className="flex-1 relative min-h-[50vh] md:min-h-screen">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center">
                        <h2 className="text-luxury text-sm tracking-[0.4em] opacity-40 mb-2">Live Preview</h2>
                        <p className="text-luxury text-2xl font-serif italic tracking-wider">{currentModel}</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Design Panel */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-[450px] bg-[#0c0c0c] border-l border-white/5 p-8 md:p-12 overflow-y-auto z-20"
            >
                <div className="mb-12">
                    <h1 className="text-luxury text-4xl font-serif tracking-tight mb-2">Bespoke Atelier</h1>
                    <p className="text-luxury text-[10px] tracking-[0.2em] opacity-40 uppercase">Configure your masterpiece</p>
                </div>

                {/* Price Section */}
                <div className="mb-12">
                    <p className="text-luxury text-[10px] tracking-widest opacity-40 mb-1 uppercase">Investment</p>
                    <motion.p
                        key={totalPrice}
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="text-luxury text-3xl font-medium tracking-wider text-[#d4af37]"
                    >
                        ${totalPrice.toLocaleString()}
                    </motion.p>
                </div>

                {/* Paint Selection */}
                <section className="mb-16">
                    <h3 className="text-luxury text-[10px] tracking-[0.3em] opacity-60 mb-6 uppercase">Paint Collection</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {PAINT_COLLECTION.map((option) => (
                            <div key={option.name} className="flex flex-col items-center gap-3">
                                <button
                                    onClick={() => setPaintColor(option.color, option.fee)}
                                    style={{ backgroundColor: option.color }}
                                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${paintColor === option.color ? 'border-[#d4af37] scale-110 shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'border-white/10'}`}
                                />
                                <span className="text-[10px] text-luxury opacity-40 uppercase tracking-widest">{option.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Lead Gen Form */}
                <section className="mt-auto pt-16 border-t border-white/5">
                    <h3 className="text-luxury text-[10px] tracking-[0.3em] opacity-60 mb-8 uppercase">Bespoke Request</h3>
                    <form className="space-y-6" action="/checkout">
                        <div>
                            <input
                                required
                                type="text"
                                placeholder="NAME"
                                className="w-full bg-transparent border-b border-white/10 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-30"
                            />
                        </div>
                        <div>
                            <input
                                required
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-transparent border-b border-white/10 py-3 text-xs tracking-widest uppercase focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-30"
                            />
                        </div>
                        <button type="submit" className="w-full py-4 mt-8 bg-white text-black text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-opacity-90 transition-all">
                            Initiate Consultation
                        </button>
                    </form>
                </section>
            </motion.div>
        </main>
    );
}
