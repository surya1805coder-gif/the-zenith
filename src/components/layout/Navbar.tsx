"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold tracking-widest text-luxury">
                    The Zenith
                </Link>
                <div className="hidden md:flex space-x-12">
                    {[
                        { name: "Collection", href: "/inventory" },
                        { name: "Bespoke", href: "/configurator" },
                        { name: "Showroom", href: "#showroom" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm text-luxury opacity-70 hover:opacity-100 transition-opacity"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <button className="text-sm px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-luxury">
                    Account
                </button>
            </div>
        </nav>
    );
}
