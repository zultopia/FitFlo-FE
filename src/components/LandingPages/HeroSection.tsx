import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowRight, FaChartLine } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

import dashboardImg from "../../assets/dashboard.png";

// Animation variants for floating effect
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

// Animation variants for subtle rotation
const tiltAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

// Pulse animation
const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  // Transform values for device animation - further extended scroll range for even smoother animation
  const rotate = useTransform(scrollYProgress, [0, 0.4], [15, 0]); // Extended range for slower rotation
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]); // Extended range for slower scaling
  // Adjusted y transform for slower movement
  const y = useTransform(scrollYProgress, [0, 0.4], [-50, 30]);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pb-10 pt-2">
      {/* Main content centered */}
      <div className="relative mx-auto h-full flex flex-col items-center">
        {/* Content Container - All centered */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Text Content - Centered */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center space-y-6 mb-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {/* Updated Badge/Label with #1 */}
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 bg-black px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                <div className="bg-secondary text-white w-11 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                  #1
                </div>
                <span className="text-sm font-regular text-white">
                  The First AI Health Path Optimizer ✨
                </span>
              </div>
            </motion.div>

            <motion.h1
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">
                Your Path to{" "}
                <span className="text-blue-600 underline decoration-blue-600 underline-offset-4">
                  Better Health
                </span>
              </span>
              <span className="block">Starts Here</span>
            </motion.h1>

            <motion.p
              animate={{ opacity: 1 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block">
                Track symptoms, plan treatments, and manage healthcare costs—
              </span>
              <span className="block">all in one place.</span>
            </motion.p>

            <motion.div
              animate={{ opacity: 1 }}
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {/* Reduced button size */}
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium py-2 px-5 rounded-lg flex items-center justify-center gap-2 text-base">
                Start My Journey
                <FaArrowRight className="text-xs" />
              </button>
              <button className="bg-transparent hover:bg-gray-100 transition-colors text-gray-800 font-medium py-2 px-5 rounded-lg border border-gray-300 text-base">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Device Image - Position raised even higher */}
          <motion.div
            className="relative w-full flex justify-center items-center -mt-4"
            style={{
              perspective: 1200,
            }}
          >
            <motion.div
              animate={{ opacity: 1 }}
              className="w-full max-w-4xl mx-auto relative shadow-2xl rounded-lg overflow-hidden"
              initial={{ opacity: 0 }}
              style={{
                rotateX: rotate,
                scale,
                y,
              }}
              transition={{
                delay: 0.8,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              <img
                alt="Health Dashboard"
                className="w-full h-auto"
                src={dashboardImg}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fixed position cards that break out of container - with higher z-index to be in front */}
      <div className="fixed-cards">
        {/* Card 1 - Real-Time Monitoring - Top Left */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="fixed-card top-[80px] md:top-[100px] left-4 z-20"
          initial={{ opacity: 0, x: -100 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate="animate"
            className="bg-white p-4 rounded-lg shadow-lg max-w-[240px]"
            variants={tiltAnimation}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2 rounded-full">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Real-Time Monitoring
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Track your progress with live updates and data visualizations.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 2 - Reminders & Alerts - Top Right */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="fixed-card top-[80px] md:top-[100px] right-4 z-20"
          initial={{ opacity: 0, x: 120 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate="animate"
            className="bg-white p-4 rounded-lg shadow-lg max-w-[240px]"
            variants={pulseAnimation}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-red-100 p-2 rounded-full">
                <MdAccessTime className="text-red-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Reminders & Alerts
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Get timely notifications for medications, appointments, and more.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 3 - Personalized Plans - Bottom Left */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="fixed-card top-[280px] md:top-[300px] left-4 md:left-8 lg:left-12 z-20"
          initial={{ opacity: 0, x: -120 }}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate="animate"
            className="bg-white p-4 rounded-lg shadow-lg max-w-[240px]"
            variants={floatingAnimation}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                <FaClipboardList className="text-green-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-800">
                Personalized Health Plans
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Receive tailored recommendations based on your condition and
              goals.
            </p>
          </motion.div>
        </motion.div>

        {/* Card 4 - Statistics Card - Bottom Right */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="fixed-card top-[280px] md:top-[300px] right-4 md:right-8 lg:right-12 z-20"
          initial={{ opacity: 0, x: 140 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate="animate"
            className="bg-white p-4 rounded-lg shadow-lg max-w-[240px]"
            variants={tiltAnimation}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800">
                Treatment Statistics
              </h3>
            </div>
            <div className="mb-2 flex items-center">
              <span className="text-2xl font-bold">50+</span>
              <span className="ml-2 text-green-500 text-sm font-medium">
                +3.9%
              </span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Chronic Pain</span>
                  <span className="text-gray-500">55%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full w-full">
                  <div className="h-1.5 bg-blue-500 rounded-full w-[55%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Digestive</span>
                  <span className="text-gray-500">25%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full w-full">
                  <div className="h-1.5 bg-blue-500 rounded-full w-[25%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add global styles for fixed cards */}
      <style jsx>{`
        .fixed-cards {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .fixed-card {
          position: absolute;
          pointer-events: auto;
          display: none;
        }
        @media (min-width: 768px) {
          .fixed-card {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
