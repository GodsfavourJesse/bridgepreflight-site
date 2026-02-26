"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CLIDemo from "./components/CLIDEMO";

export default function HomePage() {
    return (
        <section className="relative overflow-hidden hero-grid">
        
            {/* Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/20 blur-[180px] rounded-full" />
            </div>

            {/* HERO */}
            <div className="relative max-w-6xl mx-auto px-6 md:pt-40 mt-12 pb-32 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs tracking-wide bg-white/5 border border-white/10 text-neutral-300">
                        Infrastructure Risk Intelligence
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="mt-10 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
                >
                    Deployment Safety,
                    <span className="block text-neutral-400 font-normal">
                        Engineered Before Production
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="mt-8 text-[15px] md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                >
                    BridgePreflight analyzes Node.js infrastructure, detects
                    deployment risks, and generates deterministic readiness
                    scores — enabling strict CI enforcement before production failures occur.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.7 }}
                    className="mt-14 flex justify-center gap-6 flex-wrap"
                >
                    <Link
                        href="/docs"
                        className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)]"
                    >
                        View Documentation
                    </Link>

                    <Link
                        href="/investors"
                        className="px-8 py-3 rounded-2xl text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                    >
                        Investor Information
                    </Link>
                </motion.div>
            </div>

            {/* FEATURES */}
            <div className="relative md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                    {[
                        {
                            title: "Deterministic Scoring Engine",
                            desc: "Transparent weighted scoring model designed for reproducible infrastructure analysis.",
                        },
                        {
                            title: "CI Policy Enforcement",
                            desc: "Strict modes and structured JSON output for automated deployment gating.",
                        },
                        {
                            title: "Infrastructure Integrity Checks",
                            desc: "Runtime compatibility, lockfile validation, environment hygiene, and build integrity.",
                        },
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all backdrop-blur"
                        >
                            <h3 className="text-lg font-semibold tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="relative border-t border-white/5 py-32 text-center max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    Infrastructure Reliability Should Be Measurable
                </h2>

                <p className="mt-6 text-neutral-400 max-w-2xl text-[15px] mx-auto">
                    BridgePreflight establishes deployment risk scoring as
                    a foundational control layer between development and production.
                </p>
            </div>

            {/* CLI DEMO */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9 }}
                className="mt-18 md:mt-24"
            >
                <CLIDemo />
            </motion.div>
        </section>
    );
}