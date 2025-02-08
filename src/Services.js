import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build modern and responsive websites tailored to your needs.",
      icon: "🌐",
    },
    {
      title: "Technical Consulting",
      description: "Get expert advice on choosing the right technologies for your business.",
      icon: "💼",
    },
    {
      title: "Training and Workshops",
      description: "Learn the latest tools and technologies through our hands-on training programs.",
      icon: "📚",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
