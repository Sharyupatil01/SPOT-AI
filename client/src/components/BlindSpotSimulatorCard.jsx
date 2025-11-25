import React, { useState } from "react";

// Icon
const ZapIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default function BlindSpotSimulatorCard({ setView }) {
  const [company, setCompany] = useState("Google");
  const [experience, setExperience] = useState(
    "Failed technical screening, felt unprepared for system design questions."
  );

  const handleSubmit = () => {
    setView("login"); // Navigate to login
  };

  return (
    <div className="flex justify-center items-center w-full px-4 mt-10">
      <div
        className="
          w-full max-w-xl
          p-1 rounded-3xl 
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-[0_0_40px_rgba(0,0,0,0.5)]
          transition-all duration-500
        "
      >
        <div
          className="
            bg-gray-900/60 backdrop-blur-xl 
            rounded-3xl p-8
            border border-white/10
          "
        >
          <h3 className="text-3xl font-bold text-white mb-3 flex items-center">
            <ZapIcon className="w-7 h-7 mr-3 text-blue-400" />
            Spot Your Failure Pattern
          </h3>

          {/* Quote */}
          <p className="text-blue-300/80 italic mb-4 text-sm">
            You are just one step closer to your dream job.
          </p>

          <p className="text-gray-300 mb-8">
            Enter your recent interview experience and discover your blind
            spots.
          </p>

          <div className="space-y-6">
            {/* Company Name */}
            <div>
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Company Name
              </label>
              <input
                id="company-name"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g., Google, Amazon, Startup X"
                className="
                  w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl
                  text-white placeholder-gray-500
                  focus:ring-blue-500 focus:border-blue-500 transition
                "
              />
            </div>

            {/* Interview Experience */}
            <div>
              <label
                htmlFor="interview-experience"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Interview Experience (Detailed Explanation)
              </label>

              <textarea
                id="interview-experience"
                rows="4"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="What happened? What was the outcome? What were your pain points?"
                className="
                  w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl
                  text-white placeholder-gray-500 resize-none
                  focus:ring-blue-500 focus:border-blue-500 transition
                "
              />
            </div>

            {/* Unified Button */}
            <button
              onClick={handleSubmit}
              className="
                w-full py-3 rounded-xl text-lg font-semibold
                bg-white/10 backdrop-blur-xl border border-white/20
                shadow-lg shadow-blue-500/20
                hover:bg-white/20 hover:shadow-blue-400/40
                hover:scale-[1.03] active:scale-[0.98]
                transition-all duration-300 text-white
                flex items-center justify-center space-x-2
              "
            >
              <span>Find Your Blind Spots</span>
              <ZapIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
