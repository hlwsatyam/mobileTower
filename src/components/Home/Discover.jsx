import React from "react";

function Discover() {
  return (
    <div>
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10,000+", label: "Happy Partners" },
              { value: "500+", label: "Towers Installed" },
              { value: "20 Years", label: "Experience" },
              { value: "99.9%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-indigo-400">
                  {stat.value}
                </h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Consultation",
                description:
                  "Get expert advice and personalized recommendations.",
                benefits: [
                  "Expert Insights",
                  "Custom Strategy",
                  "Tailored Solutions",
                ],
              },
              {
                name: "Project Management",
                description:
                  "End-to-end project management for seamless execution.",
                benefits: [
                  "Timely Delivery",
                  "Budget Control",
                  "Risk Management",
                ],
              },
              {
                name: "Customer Support",
                description:
                  "Reliable and responsive customer support around the clock.",
                benefits: [
                  "24/7 Availability",
                  "Multichannel Support",
                  "Quick Resolution",
                ],
              },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {service.description}
                </p>
                <ul className="text-gray-600 mb-4 space-y-2">
                  {service.benefits.map((benefit, j) => (
                    <li key={j}>✔ {benefit}</li>
                  ))}
                </ul>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Arjun Mehta",
                feedback: "Monthly income without any hassles.",
              },
              {
                name: "Priya Singh",
                feedback: "Professional and trustworthy partnership.",
              },
              {
                name: "Vikram Rao",
                feedback: "Great use of unused property space.",
              },
            ].map((story, i) => (
              <div key={i} className="p-6 bg-white shadow-md rounded-lg">
                <p className="text-gray-600 italic">“{story.feedback}”</p>
                <h4 className="mt-4 font-semibold">{story.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-2 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Real-Life Transformations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "From Vacant Land to Monthly Income",
                summary: "A small plot in Delhi now generates ₹50,000 monthly.",
              },
              {
                title: "Urban Rooftop Solution",
                summary: "Unused rooftop in Mumbai creates consistent revenue.",
              },
            ].map((caseStudy, i) => (
              <div key={i} className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600">{caseStudy.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Discover;
