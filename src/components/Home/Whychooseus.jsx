import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Guaranteed Monthly Income",
      description:
        "Turn your unused space into a consistent revenue stream with zero investment.",
      icon: "💰",
    },
    {
      title: "Hassle-Free Installation",
      description:
        "Our expert team handles everything from permits to setup, making the process seamless.",
      icon: "⚡",
    },
    {
      title: "Environment-Friendly Technology",
      description:
        "Our mobile towers are designed to be eco-friendly and comply with all safety standards.",
      icon: "🌍",
    },
    {
      title: "Trusted Nationwide",
      description:
        "Join thousands of property owners who trust Reliance Jio for transparent and reliable partnerships.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose Reliance Jio for Tower Installation?
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{point.title}</h3>
              <p className="text-gray-600 text-center">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
