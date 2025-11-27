import { motion } from "framer-motion";

const steps = [
  {
    title: "Track Your Interviews",
    desc: "Add your interview attempts, rounds, feedback, and pain points.",
  },
  {
    title: "Spot Ai Finds Blind Spots",
    desc: "We analyze patterns like failing in HR, technical, confidence issues, etc.",
  },
  {
    title: "Get Personalized Coaching",
    desc: "Receive tailored suggestions based on your weaknesses.",
  },
  {
    title: "Improve & Master",
    desc: "Track progress and see improvement across attempts.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-32 relative">

      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-16">
        How <span className="text-red-500">Spot AI</span> Works
         <div className="w-full flex justify-center my-6">
                <div className="h-px w-70 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
      </h2>
      

      {/* Stepper Line */}
      <div className="absolute left-1/2 top-44 -translate-x-1/2 hidden md:block">
        <div className="w-3 h-3 bg-indigo-400 rounded-full mx-auto"></div>
        <div className="w-1 h-[300px] bg-gradient-to-b from-indigo-400/70 to-transparent mx-auto"></div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="
              relative p-6 rounded-2xl border border-white/10
              backdrop-blur-xl bg-white/5 shadow-xl
              hover:bg-white/10 hover:scale-105 transition-all
              group
            "
          >
            {/* Number Circle */}
            <div className="absolute -top-4 left-4 w-10 h-10 rounded-full 
              bg-indigo-500/30 backdrop-blur-md border border-indigo-400/40 
              flex items-center justify-center text-indigo-300 font-bold text-lg">
              {i + 1}
            </div>

            {/* Glow Effect */}
            <div className="
              absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
              bg-gradient-to-br from-indigo-400/20 to-purple-500/20
              blur-xl transition-all
            "></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
