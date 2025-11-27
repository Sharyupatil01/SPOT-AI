import React from "react";

export default function AboutSpotAI() {
    return (
        <section className="py-20 px-6 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">About <h2 className="text-purple-500">SpotAI</h2></h2>
            <p className="text-lg text-gray-300 mb-6">
                We're dedicated to helping you sharpen your interview skills through personalized coaching,
                context‑aware suggestions, and AI‑powered growth insights.
            </p>
            <div className="w-full flex justify-center my-6">
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
            <p className="text-md text-gray-400">
                Our mission is to provide a secure, intelligent platform that analyzes your interview attempts and
                delivers targeted feedback at the perfect moment—helping you improve with every rejection and come back stronger.
            </p>
        </section>
    );
}