"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConfigStore } from "@/store/useConfigStore";
import { ShieldCheck, CreditCard, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();
    const { currentModel, paintColor, totalPrice, isProcessing, setProcessing } = useConfigStore();
    const [cardNumber, setCardNumber] = useState("");

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        // Simulate luxury bank check delay
        await new Promise((resolve) => setTimeout(resolve, 3500));

        setProcessing(false);
        router.push("/checkout/success");
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
            <AnimatePresence>
                {isProcessing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center"
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "300px" }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="h-[1px] bg-[#d4af37] mb-8"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-luxury text-sm tracking-[0.4em] text-[#d4af37]"
                        >
                            Securing your Bespoke Commission...
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Left: Order Summary */}
            <div className="flex-1">
                <h1 className="text-3xl font-serif tracking-tight text-luxury mb-12">Commission Summary</h1>

                <div className="space-y-8 border-t border-white/5 pt-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-luxury text-[10px] tracking-widest opacity-40 uppercase mb-1">Vehicle Model</p>
                            <p className="text-xl font-light tracking-wide">{currentModel}</p>
                        </div>
                        <p className="text-[#d4af37] font-medium tracking-wider">$450,000</p>
                    </div>

                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-luxury text-[10px] tracking-widest opacity-40 uppercase mb-1">Bespoke Finish</p>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: paintColor }} />
                                <p className="text-sm font-light tracking-wide opacity-80 uppercase">Custom Paint Upgrade</p>
                            </div>
                        </div>
                        <p className="text-[#d4af37] font-medium tracking-wider">Included</p>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                        <p className="text-luxury text-xs tracking-[0.2em] font-bold uppercase">Total Investment</p>
                        <p className="text-2xl font-medium tracking-wider text-[#d4af37]">
                            ${totalPrice.toLocaleString()}
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex items-center gap-4 p-4 border border-white/5 bg-white/5 rounded-sm">
                    <ShieldCheck className="w-5 h-5 text-[#d4af37] opacity-60" />
                    <p className="text-[10px] uppercase tracking-widest opacity-40">
                        Zenith Secure Transaction Protocol Engaged
                    </p>
                </div>
            </div>

            {/* Right: Payment Form */}
            <div className="w-full md:w-[400px]">
                <h2 className="text-xs tracking-[0.4em] opacity-40 uppercase mb-8">Secure Payment</h2>

                <form className="space-y-8" onSubmit={handlePayment}>
                    <div className="space-y-6">
                        <div className="relative">
                            <input
                                required
                                type="text"
                                placeholder="CARDHOLDER NAME"
                                className="w-full bg-transparent border-b border-white/10 py-3 text-[10px] tracking-[0.2em] uppercase focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20"
                            />
                        </div>

                        <div className="relative">
                            <CreditCard className="absolute right-0 top-3 w-4 h-4 opacity-20" />
                            <input
                                required
                                type="text"
                                placeholder="CARD NUMBER"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))}
                                className="w-full bg-transparent border-b border-white/10 py-3 text-[10px] tracking-[0.2em] uppercase focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20"
                            />
                        </div>

                        <div className="flex gap-8">
                            <input
                                required
                                type="text"
                                placeholder="MM/YY"
                                className="flex-1 bg-transparent border-b border-white/10 py-3 text-[10px] tracking-[0.2em] uppercase focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20"
                            />
                            <div className="flex-1 relative">
                                <Lock className="absolute right-0 top-3 w-3 h-3 opacity-20" />
                                <input
                                    required
                                    type="text"
                                    placeholder="CVC"
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-[10px] tracking-[0.2em] uppercase focus:outline-none focus:border-[#d4af37] transition-colors placeholder:opacity-20"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-white text-black text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                        Authorize Payment
                    </button>

                    <p className="text-[9px] text-center opacity-30 uppercase tracking-[0.2em] leading-relaxed">
                        By authorizing, you agree to the Zenith Bespoke Commission Terms & Private Client Agreement.
                    </p>
                </form>
            </div>
        </main>
    );
}
