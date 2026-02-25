"use client";

import { motion } from "framer-motion";

const checks = [
  { name: "Build Check", score: 100 },
  { name: "Environment Variables", score: 100 },
  { name: "Localhost Leak", score: 90 },
  { name: "Runtime Compatibility", score: 0 },
];

export default function ScoreDashboard() {
  return (
    <div className="mt-24 max-w-5xl mx-auto bg-[#0f141b] border border-white/10 rounded-2xl p-10">
      <h2 className="text-2xl font-semibold mb-10">
        Readiness Score Dashboard
      </h2>

      <div className="space-y-6">
        {checks.map((check) => (
          <div key={check.name}>
            <div className="flex justify-between text-sm mb-2">
              <span>{check.name}</span>
              <span>{check.score}%</span>
            </div>

            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${check.score}%` }}
                transition={{ duration: 1 }}
                className={`h-full ${
                  check.score > 70
                    ? "bg-green-500"
                    : check.score > 30
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}