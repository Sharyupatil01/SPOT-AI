import React, { useState } from "react";
import HowItWorks from "./components/HowItWorks";
import DotGrid from './components/DotGrid';
import GlitterEffect from './components/GlitterEffect';
import Testimonials from './components/Testimonials';
import { Glow, GlowCapture } from "@codaworks/react-glow";
import BlindSpotSimulatorCard from "./components/BlindSpotSimulatorCard";
import Login from "./components/Login";

// Icons
const ZapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const BriefcaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const FeatherIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.5 11.5 16 13c1.3 1.3 3 2 5 2l-7 7-6-6 7-7z" />
    <path d="m15 5 1.4-1.4a2 2 0 0 1 3.2 2.6l-2.6 3.2 2.6 3.2c1.3 1.3 2 3 2 5l-7 7-6-6 7-7z" />
  </svg>
);

// Feature Card
function FeatureCard({ icon, title, description }) {
  return (
    <div className="
      backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl
      p-6 shadow-xl transition-all duration-300
      hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl
    ">
      <div className="flex items-center space-x-4 mb-3">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("landing");

  // ===============================
  // LANDING PAGE
  // ===============================
  if (view === "landing") {
    return (
      <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden font-sans">
        <GlitterEffect />

        {/* HEADER */}
        <header className="
          py-5 px-8 md:px-14 flex justify-between items-center
          fixed w-full top-0 z-50
          backdrop-blur-xl bg-gray-900/40 border-b border-white/10
        ">
          <h2 className="text-3xl font-extrabold">
            Spot <span className="text-red-600">Ai</span>
          </h2>

          {/* LOGIN BUTTON → GOES TO LOGIN PAGE */}
          <button
            onClick={() => setView("login")}
            className="
              px-6 py-2 rounded-xl font-semibold
              bg-white/10 backdrop-blur-xl border border-white/20
              shadow-lg shadow-indigo-500/20
              hover:bg-white/20 hover:shadow-indigo-400/40
              hover:scale-[1.03] active:scale-[0.98]
              transition-all duration-300
            "
          >
            Login
          </button>
        </header>

        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 md:px-12 pt-36 pb-20 relative">

          {/* HERO SECTION */}
          <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE TEXT */}
            <div className="text-center lg:text-left">

              <p className="text-indigo-400 uppercase tracking-[0.25em] text-sm mb-4">
                Know Your Gaps. Fix Them Fast.
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Prep Smarter with
                <span className="text-red-600"> SPOT AI</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
                Your personal AI interview coach — built to analyze your experience,
                detect blind spots, and help you improve faster than ever.
              </p>

              {/* CTA BUTTON → GOES TO LOGIN */}
              <button
                onClick={() => setView("login")}
                className="
                  px-12 py-4 rounded-xl text-xl font-semibold
                  bg-white/10 backdrop-blur-xl border border-white/20
                  shadow-lg shadow-indigo-500/20
                  hover:bg-white/20 hover:shadow-indigo-400/40
                  hover:scale-[1.03] active:scale-[0.98]
                  transition-all duration-300
                "
              >
                Start Your Journey
              </button>

            </div>

            {/* RIGHT SIDE — CARD */}
            <div className="flex justify-center lg:justify-end">
              <BlindSpotSimulatorCard setView={setView} />
            </div>

          </section>

          {/* WHY CHOOSE SECTION */}
          <section className="mt-20">
            <h2 className="text-center text-4xl font-bold mb-12">
              Why Choose Spot Ai?
            </h2>

            <GlowCapture>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <Glow color="purple">
                  <div className="rounded-2xl p-[2px]">
                    <FeatureCard
                      icon={<BriefcaseIcon className="w-9 h-9 text-indigo-400" />}
                      title="Identify Weak Areas"
                      description="Find exactly what’s holding you back — and fix it."
                    />
                  </div>
                </Glow>

                <Glow color="blue">
                  <div className="rounded-2xl p-[2px]">
                    <FeatureCard
                      icon={<ZapIcon className="w-9 h-9 text-indigo-400" />}
                      title="Contextual Feedback"
                      description="Spot Ai learns from your past interviews automatically."
                    />
                  </div>
                </Glow>

                <Glow color="pink">
                  <div className="rounded-2xl p-[2px]">
                    <FeatureCard
                      icon={<FeatherIcon className="w-9 h-9 text-indigo-400" />}
                      title="Master Every Interview"
                      description="Track progress, remove blind spots, gain confidence."
                    />
                  </div>
                </Glow>

              </div>
            </GlowCapture>
          </section>

          <HowItWorks />
          <Testimonials />

          <footer className="mt-20 pt-10 border-t border-white/10 text-center text-gray-500">
            © {new Date().getFullYear()} Spot Ai — All Rights Reserved.
          </footer>

        </main>
      </div>
    );
  }

  // ==========================
  // EXPERIENCE VIEW
  // ==========================
  if (view === "experience") {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col">
        <p className="text-2xl text-gray-400 mb-4">
          Interview Experience Form Coming Soon!
        </p>

        <button
          onClick={() => setView("landing")}
          className="
            px-6 py-3 rounded-xl font-semibold
            bg-white/10 backdrop-blur-xl border border-white/20
            shadow-lg shadow-indigo-500/20
            hover:bg-white/20 hover:shadow-indigo-400/40
            hover:scale-[1.03] active:scale-[0.98]
            transition-all duration-300
          "
        >
          Back to Landing
        </button>
      </div>
    );
  }

  // ==========================
  // LOGIN PAGE
  // ==========================
  if (view === "login") {
    return <Login setView={setView} />;
  }

  return <div className="text-white p-20 text-center">Loading...</div>;
}
