"use client";

export default function InvestorsPage() {
    return (
        <section className="relative bg-black text-white min-h-screen px-6 pt-32 sm:py-40 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                        Investors & Partnerships
                    </h1>
                    <p className="mt-6 text-xl text-gray-400 leading-relaxed">
                        BridgePreflight is redefining deployment risk intelligence for modern software teams.
                        Our mission is to help organizations release code safely and efficiently while minimizing risk.
                    </p>

                    {/* Accent Line */}
                    <div className="mt-8 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
                </div>

                {/* Info Cards */}
                <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                                Market Opportunity
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                With increasing deployment frequency, infrastructure failures can become costly. 
                                BridgePreflight introduces measurable risk scoring to create a new category in DevOps tools.
                            </p>
                        </div>
                    </div>

                    <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                                Vision
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                From CLI enforcement to team dashboards and enterprise policy engines, 
                                BridgePreflight is expanding into a full infrastructure intelligence platform that empowers teams to release confidently.
                            </p>
                        </div>
                    </div>

                    <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col justify-between group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors duration-300">
                                Contact
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                For sponsorship, partnerships, or investment discussions, reach out to us.
                            </p>
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=godsfavourjesse@gmail.com&su=${encodeURIComponent(
                                    "Investor/Partnership Inquiry"
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-500 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
                .animate-pulse {
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0%, 100% { transform: scaleX(1); opacity: 1; }
                    50% { transform: scaleX(1.2); opacity: 0.6; }
                }
            `}</style>
        </section>
    );
}