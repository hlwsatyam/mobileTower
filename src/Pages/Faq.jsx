import React, { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What type of properties are eligible?",
    answer:
      "Open land, rooftops, or vacant spaces with clear ownership are eligible for tower installation.",
  },
  {
    question: "How much rent can I earn?",
    answer:
      "The rental income depends on your property’s location and network requirements in the area.",
  },
  {
    question: "Who bears the installation cost?",
    answer:
      "Jio handles all costs related to installation and maintenance, so you don’t have to worry about expenses.",
  },
  {
    question: "What is the timeline for approval?",
    answer:
      "Usually, it takes 4-6 weeks from application to installation after the site inspection.",
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div id="faqs" className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 animate-pulse">
          FAQs | सामान्य प्रश्न
        </h1>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="p-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg font-semibold">
                  {faq.question}
                </h2>
                <motion.span
                  className="text-xl font-bold transform"
                  animate={{
                    rotate: selected === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  ⌄
                </motion.span>
              </div>
              {selected === index && (
                <motion.div
                  className="px-4 pb-4"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
