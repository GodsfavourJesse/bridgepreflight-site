"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Investors", href: "/investors" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-500 ${
                scrolled
                ? "backdrop-blur-2xl bg-[#0b0f14]/80 py-3 border-b border-white/5"
                : "backdrop-blur-xl bg-[#0b0f14]/60 py-5 border-b border-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                    <span className="text-lg font-semibold tracking-tight group-hover:opacity-80 transition">
                        BridgePreflight
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10 relative">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                            <div key={link.href} className="relative">
                                <Link
                                    href={link.href}
                                    className={`text-sm transition-colors ${
                                        isActive ? "text-white" : "text-neutral-400 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                </Link>

                                {/* Active Glow Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute -bottom-2 left-0 right-0 h-[2px] bg-indigo-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.9)]"
                                    />
                                )}
                            </div>
                        );
                    })}

                    {/* GitHub Badge */}
                    <a
                        href="https://github.com/GodsfavourJesse"
                        target="_blank"
                        className="relative ml-6 px-4 py-2 rounded-xl text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition"
                    >
                        GitHub

                        <span className="absolute -top-2 -right-2 text-xs bg-indigo-600 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]">
                        ★ 1.2k
                        </span>
                    </a>
                </nav>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=godsfavourjesse@gmail.com&su=${encodeURIComponent("Investor/Partnership Inquiry")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-2xl text-sm font-medium bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)]"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </header>
    );
}