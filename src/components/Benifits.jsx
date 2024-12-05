export default function Benefits() {
    const benefits = [
      {
        title: "Save Time",
        description:
          "Our platform streamlines your tasks, allowing you to save valuable time and focus on what matters most.",
        icon: "fas fa-clock",
      },
      {
        title: "Earn Rewards",
        description:
          "Get rewarded for your contributions with cashbacks, discounts, and exclusive perks.",
        icon: "fas fa-gift",
      },
      {
        title: "Boost Efficiency",
        description:
          "Our tools are designed to enhance productivity and ensure you achieve more with less effort.",
        icon: "fas fa-chart-line",
      },
      {
        title: "24/7 Support",
        description:
          "Access round-the-clock support to resolve any issues and keep your work running smoothly.",
        icon: "fas fa-headset",
      },
    ];
  
    return (
      <div id='benefits' className="bg-gray-50  py-4">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Benefits</h1>
          <p className="text-lg text-gray-600 mb-12">
            Discover the advantages of using our platform to make your life
            easier and more rewarding.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-500 text-4xl mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h2>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  