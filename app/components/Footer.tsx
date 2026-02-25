"use client";

export default function Footer() {
    return (
        <footer className="mt-40 border-t border-white/5 bg-[#0b0f14] footer-grid">
        
            <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-16 text-sm">

                <div>
                    <h3 className="text-base font-semibold tracking-tight">
                        BridgePreflight
                    </h3>

                    <p className="mt-5 text-neutral-400 leading-relaxed max-w-sm">
                        Deployment Risk Intelligence for modern Node.js infrastructure.
                        Prevent high-risk releases before they reach production.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-neutral-300">
                        Product
                    </h4>

                    <ul className="mt-6 space-y-3 text-neutral-400">
                        <li><a href="/docs" className="hover:text-white transition">Documentation</a></li>
                        <li><a href="/investors" className="hover:text-white transition">Investors</a></li>
                        <li><a href="https://github.com/GodsfavourJesse" className="hover:text-white transition">GitHub</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-medium text-neutral-300">
                        Contact
                    </h4>

                    <p className="mt-6 text-neutral-400">
                        godsfavourjesse@gmail.com
                    </p>
                </div>
            </div>

            <div className="py-8 text-center text-xs text-neutral-500">
                © {new Date().getFullYear()} BridgePreflight. All rights reserved.
            </div>
        </footer>
    );
}