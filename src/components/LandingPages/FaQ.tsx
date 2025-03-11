import React, { useState } from 'react'
import {motion} from "framer-motion"
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is FitFlo?",
    answer: "FitFlo is a medical pathway planner app that helps users understand and follow the necessary treatments and complete medication journeys. It provides personalized treatment plans, medication tracking, and progress monitoring to support your health journey."
  },
  {
    id: 2,
    question: "How does FitFlo work?",
    answer: "FitFlo analyzes your medical condition and provides a structured pathway to guide you through your treatment. It includes reminders for medication, check-ups, and lifestyle changes, making it easier to stay on track with your healthcare routine."
  },
  {
    id: 3,
    question: "Who can use FitFlo?",
    answer: "FitFlo is designed for anyone who needs help managing their health journey, including chronic illness patients, caregivers, elderly individuals, and those undergoing long-term treatments."
  },
  {
    id: 4,
    question: "Is my medical data secure on FitFlo?",
    answer: "Absolutely! FitFlo prioritizes user privacy and follows industry-standard encryption to ensure your medical information remains safe and confidential."
  },
  {
    id: 5,
    question: "How can I get customer support?",
    answer: "You can reach our customer support team through the in-app chat or email us at hello@fitflo.com. We’re here to help 24/7!"
  }
]

const FaQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.h3
          className="text-blue-700 font-semibold uppercase tracking-wide text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h3>
        <motion.h2
          className="text-2xl font-extrabold mt-2 text-gray-900 mx-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Have questions? We've got answers!
        </motion.h2>
        <p className="text-md text-gray-700 mt-4 mx-5">
          Explore our FAQs to learn how FitFlo can help you take control of your health journey.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white mx-6 md:mx-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: faq.id * 0.1 }}
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center text-gray-900 font-medium hover:bg-gray-100 focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
              <ChevronDown
                size={20}
                className={`transform transition-transform ${openIndex === faq.id ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            {openIndex === faq.id && (
              <motion.div
                className="px-6 py-4 text-gray-700 bg-gray-50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FaQ