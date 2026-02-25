"use client";

import { useEffect, useState } from "react";

const checks = [
    { name: "Build Check", score: 50, max: 50, type: "success" as const, ms: 2551 },
    { name: "Environment Variables Check", score: 30, max: 30, type: "success" as const, ms: 21 },
    { name: "Localhost Leak Check", score: 18, max: 20, type: "warning" as const, ms: 5 },
    { name: "Runtime Compatibility Check", score: 10, max: 20, type: "error" as const, ms: 1 }, // changed to 10
];

interface ScanLine {
    type: "about" | "info" | "success" | "warning" | "error" | "command" | "title";
    text: string;
    progress?: number;
}

export default function CLIDemo() {
    const [lines, setLines] = useState<ScanLine[]>([]);
    const [done, setDone] = useState(false);
    const [mounted, setMounted] = useState(false);

    const totalScore = checks.reduce((sum, c) => sum + c.score, 0); // 108
    const totalMax = checks.reduce((sum, c) => sum + c.max, 0);     // 120
    const percentage = ((totalScore / totalMax) * 100).toFixed(1); // 90.0

    const readiness =
        Number(percentage) >= 85
        ? { text: "Readiness: Ready to Deploy", type: "success" as const }
        : Number(percentage) >= 60
        ? { text: "Readiness: Deploy with Caution", type: "warning" as const }
        : { text: "Readiness: Deployment Blocked", type: "error" as const };

    const scanLines: ScanLine[] = [
        { type: "command", text: "$ bridgepreflight scan" },
        { type: "title", text: "Welcome to BridgePreflight — AI-native infrastructure readiness scanner" },
        { type: "about", text: "BridgePreflight needs access to scan your entire project. Allow? (y/n): y" },
        { type: "title", text: "--- BridgePreflight Scan ---" },
        { type: "info", text: "" },

        { type: "success", text: "✅ Build Check (50/50) - 2551ms", progress: 100 },
        { type: "success", text: "✅ Environment Variables Check (30/30) - 21ms", progress: 100 },
        { type: "warning", text: "⚠️ Localhost Leak Check (18/20) - 5ms", progress: 90 },
        { type: "error", text: "❌ Runtime Compatibility Check (10/20) - 1ms", progress: 50 }, // ✅ 50%

        { type: "title", text: "-----------------------------" },
        { type: "info", text: "" },
        { type: "info", text: `Total Score: ${totalScore}/${totalMax} (${percentage}%)` }, // ✅ 108/120 (90.0%)
        { type: "info", text: "Weighted scoring applied based on risk category" },
        { type: readiness.type, text: readiness.text }, // ✅ Now shows "Ready to Deploy"
        { type: "info", text: "" },

        { type: "title", text: "--- Detailed Findings ---" },
        { type: "info", text: "Environment Variables Check Findings:" },
        { type: "info", text: " • INFO: .env.example file is missing." },
        { type: "info", text: "   → Suggested action: Add a .env.example file to document required environment variables for your team and CI/CD environments." },
        { type: "info", text: "Localhost Leak Check Findings:" },
        { type: "warning", text: " • WARNING: 1 hardcoded localhost reference(s) detected." },
        { type: "info", text: "   • Evidence: Examples: analyzers\\network.ts" },
        { type: "info", text: "   → Suggested action: Replace hardcoded localhost or 127.0.0.1 URLs with environment-based configuration (e.g., process.env.API_BASE_URL)." },
        { type: "command", text: "$" },
    ];

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!mounted) return;

        let lineIndex = 0;

        const typeLine = (line: ScanLine, charIndex = 0) => {
            if (charIndex <= line.text.length) {
                const currentText = line.text.slice(0, charIndex);
                setLines((prev) => {
                    const newLines = [...prev];
                    newLines[lineIndex] = { ...line, text: currentText };
                    return newLines;
                });
                setTimeout(() => typeLine(line, charIndex + 1), 20);
            } else {
                lineIndex++;
                if (lineIndex < scanLines.length) {
                    addLineSequentially(scanLines[lineIndex]);
                } else {
                    setDone(true);
                }
            }
        };

        const addLineSequentially = (line: ScanLine) => {
            if (line.progress !== undefined) {
                let progress = 0;
                const step = Math.max(1, Math.round(line.progress / 20));

                setLines((prev) => [...prev, { ...line, text: "", progress: 0 }]);
                const progressInterval = setInterval(() => {
                    progress = Math.min(line.progress!, progress + step);

                    setLines((prev) => {
                        const newLines = [...prev];
                        newLines[lineIndex] = { ...line, text: line.text, progress };
                        return newLines;
                    });

                    if (progress >= line.progress!) {
                        clearInterval(progressInterval);
                        lineIndex++;
                        if (lineIndex < scanLines.length) {
                            addLineSequentially(scanLines[lineIndex]);
                        } else {
                            setDone(true);
                        }
                    }
                }, 25);
            } else {
                setLines((prev) => [...prev, { ...line, text: "" }]);
                typeLine(line, 0);
            }
        };

        addLineSequentially(scanLines[lineIndex]);
    }, [mounted]);

    const getTextColor = (type: ScanLine["type"]) => {
        switch (type) {
            case "success": return "text-green-400";
            case "warning": return "text-yellow-400";
            case "error": return "text-red-500";
            case "command": return "text-cyan-400";
            case "title": return "text-blue-400";
            case "about": return "text-gray-600";
            default: return "text-neutral-300";
        }
    };

    const renderProgressBar = (progress: number) => {
        const blocks = 20;
        const filled = Math.round((progress / 100) * blocks);
        const empty = blocks - filled;
        const bar = "█".repeat(filled) + "░".repeat(empty);
        const color =
        progress >= 70
            ? "text-green-500"
            : progress >= 40
            ? "text-yellow-400"
            : "text-red-500";

        return (
            <span className={`${color} font-mono`}>
                {bar} {progress}%
            </span>
        );
    };

    return (
        <div className="mt-20 max-w-5xl mx-auto bg-[#1e1e1e] border border-white/10 rounded-2xl p-6 font-mono text-sm shadow-xl">
            {lines.map((line, i) =>
                line ? (
                    <div key={i} className="mb-1 text-left">
                        <span className={getTextColor(line.type)}>{line.text}</span>
                        {line.progress !== undefined && (
                        <div className="mt-1">{renderProgressBar(line.progress)}</div>
                        )}
                    </div>
                ) : null
            )}

            <div className="text-left text-cyan-400 mt-1">
                {!done && <span className="animate-blink">_</span>}
            </div>

            <style jsx>{`
                @keyframes blink {
                0%, 50%, 100% { opacity: 1; }
                25%, 75% { opacity: 0; }
                }
                .animate-blink {
                animation: blink 1s step-start infinite;
                }
            `}</style>
        </div>
    );
}