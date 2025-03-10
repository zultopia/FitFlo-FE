import { motion } from "framer-motion";
import { FaHeartbeat, FaDumbbell, FaAppleAlt } from "react-icons/fa";

const impactData = [
  {
    icon: <FaHeartbeat size={50} className="text-red-600" />,
    title: "Personalized Health Insights",
    description:
      "AI-powered insights to track and improve your fitness journey with precision and ease.",
    bgColor: "from-red-200 to-red-400",
  },
  {
    icon: <FaDumbbell size={50} className="text-blue-600" />,
    title: "Optimized Workout Plans",
    description:
      "Tailored workout routines to match your fitness level, ensuring sustainable progress.",
    bgColor: "from-blue-200 to-blue-400",
  },
  {
    icon: <FaAppleAlt size={50} className="text-green-600" />,
    title: "Smart Nutrition Guidance",
    description:
      "Personalized meal plans and dietary insights for a balanced and healthier lifestyle.",
    bgColor: "from-green-200 to-green-400",
  },
];

const ImpactSection = () => {
  return (
    <section className="relative py-12 px-6 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-200 opacity-20 blur-3xl rounded-full"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h3
          className="text-blue-700 font-semibold uppercase tracking-wide text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Impact
        </motion.h3>
        <motion.h2
          className="text-2xl font-extrabold mt-2 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Health with Fitflo
        </motion.h2>
        <p className="text-md text-gray-700 mt-4">
          Discover how our AI-driven insights, personalized plans, and expert recommendations 
          can elevate your fitness journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16 relative z-10">
        {impactData.map((impact, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-3xl shadow-lg flex flex-col items-center text-center bg-gradient-to-br ${impact.bgColor} relative overflow-hidden`}
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="p-5 bg-white rounded-full shadow-lg">{impact.icon}</div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">{impact.title}</h3>
            <p className="mt-3 text-gray-800 text-md leading-relaxed">{impact.description}</p>

            <div className="absolute inset-0 bg-white opacity-10 blur-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;