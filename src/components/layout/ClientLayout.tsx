"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

// Deeply isolate all browser-only components to prevent SSR leaks
const Navbar = dynamic(() => import("@/components/layout/Navbar"), { ssr: false });
const SceneContainer = dynamic(() => import("@/components-3d/canvas/SceneContainer"), { ssr: false });
const LuxuryLoader = dynamic(() => import("@/components/common/LuxuryLoader"), { ssr: false });

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        // Simulate initial asset loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    // SSR Guard: Keep it minimal during static generation
    if (!isMounted) return (
        <div className="bg-[#0a0a0a] min-h-screen text-white">
            {children}
        </div>
    );

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <LuxuryLoader key="loader" />}
            </AnimatePresence>

            <Navbar />
            <SceneContainer />

            <div className="relative z-10 transition-opacity duration-1000" style={{ opacity: isLoading ? 0 : 1 }}>
                {children}
            </div>
        </>
    );
}
