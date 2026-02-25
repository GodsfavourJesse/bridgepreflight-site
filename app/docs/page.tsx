"use client";

import CopyButton from "../components/CopyButton";

export default function DocsPage() {
    return (
        <div className="relative px-6 py-24 scroll-smooth">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-20">

                {/* SIDEBAR */}
                <aside className="hidden md:block sticky top-32 h-fit">
                    <nav className="space-y-5 text-sm text-neutral-400">
                        {[
                            { id: "overview", label: "Overview" },
                            { id: "installation", label: "Installation" },
                            { id: "analyzers", label: "Analyzers" },
                            { id: "scoring", label: "Scoring" },
                            { id: "ci", label: "CI Integration" },
                            { id: "roadmap", label: "Roadmap" },
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="block hover:text-white transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* MAIN CONTENT */}
                <main className="max-w-4xl">

                    {/* OVERVIEW */}
                    <section
                        id="overview"
                        className="scroll-mt-32 py-24 border-b border-white/5"
                    >
                        <h1 className="text-4xl font-semibold tracking-tight">
                        BridgePreflight Documentation
                        </h1>
                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            BridgePreflight is a deterministic Deployment Risk Intelligence
                            platform that evaluates infrastructure readiness before production
                            deployment.
                        </p>
                    </section>

                    {/* INSTALLATION */}
                    <section
                        id="installation"
                        className="scroll-mt-32 py-24 border-b border-white/5"
                    >
                        <h2 className="text-2xl font-semibold">Installation</h2>

                        <div className="relative mt-8 bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 font-mono text-sm text-neutral-300">
                            <CopyButton
                                value={`npm install -g bridgepreflight\nbridgepreflight scan`}
                            />
                            <div>$ npm install -g bridgepreflight</div>
                            <div className="mt-2">$ bridgepreflight scan</div>
                            <div className="mt-2 text-neutral-500"># or</div>
                            <div className="mt-2">$ npx bridgepreflight scan</div>
                        </div>
                    </section>

                    {/* ANALYZERS */}
                    <section
                        id="analyzers"
                        className="scroll-mt-32 py-24 border-b border-white/5"
                    >
                        <h2 className="text-2xl font-semibold">Analyzers (v1.0.2)</h2>

                        <div className="mt-10 grid md:grid-cols-2 gap-6">
                            {[
                                "Build Integrity Validation",
                                "Environment Configuration Hygiene",
                                "Runtime Compatibility Verification",
                                "Localhost Leak Detection",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                                >
                                <p className="text-neutral-300 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SCORING */}
                    <section
                        id="scoring"
                        className="scroll-mt-32 py-24 border-b border-white/5"
                    >
                        <h2 className="text-2xl font-semibold">Scoring Model</h2>

                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            BridgePreflight uses deterministic weighted scoring. Each analyzer
                            contributes to a composite maximum of 120 points.
                        </p>

                        <div className="mt-10 relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 font-mono text-sm text-neutral-300">
                            <CopyButton value={`bridgepreflight scan --json --strict`} />
                            bridgepreflight scan --json --strict
                        </div>
                    </section>

                    {/* CI */}
                    <section
                        id="ci"
                        className="scroll-mt-32 py-24 border-b border-white/5"
                    >
                        <h2 className="text-2xl font-semibold">CI Integration</h2>

                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            Use JSON output and strict mode to enforce policy gating in CI
                            pipelines. Non-zero exit codes block unsafe deployments.
                        </p>
                    </section>

                    {/* ROADMAP */}
                    <section
                        id="roadmap"
                        className="scroll-mt-32 py-24"
                    >
                        <h2 className="text-2xl font-semibold">Roadmap</h2>

                        <ul className="mt-8 space-y-3 text-neutral-400 text-sm">
                            <li>Phase 1 – Deterministic CLI</li>
                            <li>Phase 2 – Policy & Enforcement</li>
                            <li>Phase 3 – GitHub Action Integration</li>
                            <li>Phase 4 – Platform Expansion</li>
                        </ul>
                    </section>

                </main>
            </div>
        </div>
    );
}