"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    features: ["Basic Scan", "CLI Access", "Community Support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["CI Integration", "Policy Enforcement", "Advanced Scoring"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Team Dashboard", "Audit Logs", "Priority Support"],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0b0f14] py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            whileHover={{ scale: 1.05 }}
            className={`p-10 rounded-2xl border ${
              tier.highlight
                ? "bg-indigo-600/10 border-indigo-500 shadow-[0_0_50px_rgba(99,102,241,0.4)]"
                : "bg-white/[0.03] border-white/5"
            }`}
          >
            <h3 className="text-xl font-semibold">{tier.name}</h3>
            <p className="mt-4 text-3xl font-bold">{tier.price}</p>

            <ul className="mt-6 space-y-3 text-neutral-400 text-sm">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button className="mt-8 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}