import { motion } from "framer-motion";

const data = [
  { name: "Aman – SDE Intern", text: "I finally understood why I kept failing final rounds." },
  { name: "Priya – Java Developer", text: "Spot Ai helped me fix my confidence issues." },
  { name: "Rahul – CS Student", text: "Amazing concept! Personalized coaching > generic advice." },
];

export default function Testimonials() {
  return (
    <section className="mt-32">
      <h2 className="text-center text-4xl font-bold mb-12">What Users Say</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {data.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            <p className="text-gray-300 mb-4 text-md italic">"{t.text}"</p>
            <h4 className="text-indigo-400 font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
