import React from "react";
import { motion } from "framer-motion";

const ThreeDCard = () => {
  const cardData = [
    {
      title: "Web Development",
      description: "Build responsive and dynamic websites with modern frameworks.",
      icon: "🌐",
    },
    {
      title: "AI Solutions",
      description: "Create AI-powered tools to optimize your business processes.",
      icon: "🤖",
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud technology for scalability and efficiency.",
      icon: "☁️",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
              whileHover={{
                scale: 1.1,
                rotateX: -10,
                rotateY: 10,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDCard;
