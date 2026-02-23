"use client";
import React, { useEffect, useState } from "react";
import InventoryGrid from "./InventoryGrid";

export default function InventoryPage() {
    const [cars, setCars] = useState<any[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setCars([
            { id: "1", name: "Phantom Zenith", price: 450000, description: "The pinnacle of luxury.", image_url: null },
            { id: "2", name: "Ghost Wraith", price: 320000, description: "A spectral presence.", image_url: null },
        ]);
    }, []);

    if (!isMounted) return null;

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-luxury mb-4">
                    The Collection
                </h1>
                <p className="text-luxury opacity-60 max-w-2xl">
                    Explore our meticulously curated inventory of the world&apos;s most prestigious automobiles.
                    Each vehicle represents the zenith of craftsmanship and performance.
                </p>
            </div>

            <InventoryGrid cars={cars} />

            <div className="mt-8 p-4 border border-white/5 bg-white/5 text-white/40 text-[10px] uppercase tracking-widest rounded-none text-center">
                Manual Override Engaged - Senior Lead Protocol
            </div>
        </main>
    );
}
