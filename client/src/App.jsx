import React, { useState } from "react";
import HowItWorks from "./components/HowItWorks";
import DotGrid from './components/DotGrid'; // path must be correct
import GlitterEffect from './components/GlitterEffect';
import Testimonials from './components/Testimonials';
import { Glow, GlowCapture } from "@codaworks/react-glow";

// --- Icons ---
const ZapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
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


// --- Feature Card Component ---
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


// =========================
//        MAIN APP
// =========================
export default function App() {
  const [view, setView] = useState("landing");


  // =========================
  //   LANDING PAGE (MAIN)
  // =========================
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
          <h2 className="text-3xl font-extrabold tracking-tight">
            Spot <span className="text-red-600">Ai</span>
          </h2>

          <button
            onClick={() => setView("experience")}
            className="px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/40"
          >
            Login
          </button>
        </header>


        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 md:px-12 pt-36 pb-20 relative">


          {/* HERO */}
          <section className="text-center mb-24">
            <p className="text-indigo-400 uppercase tracking-[0.25em] text-sm mb-4">
              Know Your Gaps. Fix Them Fast.
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Prep Smarter with
              <span className="text-red-600"> SPOT AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Your personal AI interview coach — built to analyze your experience,
              detect blind spots, and help you improve faster than ever.
            </p>

            <button
              onClick={() => setView("experience")}
              className="
                px-12 py-4 bg-indigo-600/90 rounded-full text-xl font-semibold
                shadow-2xl backdrop-blur-lg transition-all duration-300
                hover:bg-indigo-700 hover:scale-105
              "
            >
              Start Your Journey
            </button>
          </section>


          {/* WHY CHOOSE SPOT AI */}
          <section className="mt-20">
            <h2 className="text-center text-4xl font-bold mb-12">
              Why Choose Spot Ai?
            </h2>

            <GlowCapture>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


                {/* CARD 1 - PURPLE */}
                <Glow color="purple">
                  <div className="rounded-2xl p-[2px]">
                    <FeatureCard
                      icon={<BriefcaseIcon className="w-9 h-9 text-indigo-400" />}
                      title="Identify Weak Areas"
                      description="Find exactly what’s holding you back — and fix it with targeted practice."
                    />
                  </div>
                </Glow>


                {/* CARD 2 - BLUE */}
                <Glow color="blue">
                  <div className="rounded-2xl p-[2px]">
                    <FeatureCard
                      icon={<ZapIcon className="w-9 h-9 text-indigo-400" />}
                      title="Contextual Feedback"
                      description="Spot Ai learns from your past interviews and gives hyper-personalized guidance."
                    />
                  </div>
                </Glow>


                {/* CARD 3 - PINK */}
                <Glow color="pink">
                  <div className="rounded-2xl p-[2px]">
                    <FeatureCard
                      icon={<FeatherIcon className="w-9 h-9 text-indigo-400" />}
                      title="Master Every Interview"
                      description="Track progress, remove blind spots, and build unstoppable confidence."
                    />
                  </div>
                </Glow>


              </div>
            </GlowCapture>
          </section>
         <HowItWorks/>

          {/* TESTIMONIALS */}
          <Testimonials />


          {/* FOOTER */}
          <footer className="mt-20 pt-10 border-t border-white/10 text-center text-gray-500">
            © {new Date().getFullYear()} Spot Ai — All Rights Reserved.
          </footer>

        </main>
      </div>
    );
  }



  // =========================
  //      EXPERIENCE VIEW
  // =========================
  if (view === "experience") {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col">
        <p className="text-2xl text-gray-400 mb-4">Interview Experience Form Coming Soon!</p>
        <button
          onClick={() => setView("landing")}
          className="p-3 bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Back to Landing
        </button>
      </div>
    );
  }


  return <div className="text-center text-white p-20">Loading...</div>;
}
