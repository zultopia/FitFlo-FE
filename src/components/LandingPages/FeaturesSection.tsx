import { motion } from "framer-motion";
import { HeartPulse, Hospital, Stethoscope} from "lucide-react";
import pathwayPlannerImage from "../../assets/pathway_planner.jpg";
import healthcareImage from "../../assets/healthcare.jpg";
import personalCareImage from "../../assets/personal_care.jpg";

const features = [
  {
    title: "Pathway Planner",
    description:
      "Find the best treatment options with the help of AI. Simply enter your symptoms, and our system will instantly recommend the most appropriate medical steps for your condition.",
    image: pathwayPlannerImage,
    icon: <HeartPulse size={40} className="text-blue-500" />,
  },
  {
    title: "Healthcare",
    description:
      "Access top-quality healthcare facilities that suit your budget and medical needs. Easily find hospitals, clinics, and medical services near you.",
    image: healthcareImage,
    icon: <Hospital size={40} className="text-green-500" />,
  },
  {
    title: "Personal Care",
    description:
      "Monitor your health effectively with personalized care features. Use wearables or manually record your health data daily.",
    image: personalCareImage,
    icon: <Stethoscope size={40} className="text-red-500" />,
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      className="py-24 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.p
          className="text-blue-600 dark:text-blue-400 text-lg font-semibold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Overview
        </motion.p>
        <motion.h2
          className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Key Features of Fitflo
        </motion.h2>
      </div>

      {/* Features List */}
      <div className="mt-16 space-y-20 max-w-6xl mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative w-full md:w-1/2">
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-80 object-cover rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              />
              <motion.div
                className="absolute -top-6 -left-6 bg-white p-2 rounded-full shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                {feature.icon}
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mt-4">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;