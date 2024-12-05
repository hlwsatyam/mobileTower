import React from "react";
import { motion } from "framer-motion";

const eligibilityCriteria = [
  {
    title: "Space Requirements",
    description: "Minimum 500 sq. ft. open area or rooftop for installation.",
    icon: "📐",
  },
  {
    title: "Ownership",
    description:
      "Clear title and valid property documents are required to proceed.",
    icon: "📜",
  },
  {
    title: "Location",
    description:
      "Properties in prime, semi-urban, or rural areas are eligible.",
    icon: "📍",
  },
  {
    title: "Accessibility",
    description: "Easy access for installation and regular maintenance.",
    icon: "🚪",
  },
  {
    title: "Local Permissions",
    description:
      "Required approvals from local authorities must be obtained.",
    icon: "✅",
  },
];

const EligibilityCriteria = () => {
  return (
    <div id="eligibility" className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Eligibility Criteria | पात्रता मानदंड
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eligibilityCriteria.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-center text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
