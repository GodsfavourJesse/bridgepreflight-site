"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 text-xs px-3 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition text-neutral-300"
        >
            {copied ? "Copied" : "Copy"}
        </button>
    );
}