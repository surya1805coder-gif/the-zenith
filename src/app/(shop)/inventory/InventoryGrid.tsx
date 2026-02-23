"use client";
import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface Car {
    id: string | number;
    name: string;
    price: number;
    description: string;
    image_url: string | null;
}

export default function InventoryGrid({ cars }: { cars: any[] }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]" />;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
                <motion.div
                    key={car.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    className="group relative flex flex-col border border-white/5 bg-[#0f0f0f] rounded-none overflow-hidden hover:border-white/20 transition-colors"
                >
                    {/* Image Placeholder */}
                    <div className="aspect-[16/9] w-full bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
                        {car.image_url ? (
                            <img
                                src={car.image_url}
                                alt={car.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <span className="text-[10px] uppercase tracking-widest opacity-20">Image Coming Soon</span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-light tracking-wide text-luxury mb-1">{car.name}</h3>
                        <p className="text-[#d4af37] font-medium tracking-wider mb-4">
                            ${car.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-luxury opacity-50 line-clamp-2 mb-6 flex-grow">
                            {car.description}
                        </p>
                        <button className="w-full py-3 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white text-white hover:text-black transition-all">
                            View Details
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
