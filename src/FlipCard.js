import React from "react";

const FlipCard = () => {
  const cards = [
    {
      title: "Web Development",
      description:
        "Build scalable and responsive websites with modern frameworks.",
    },
    {
      title: "Data Analytics",
      description: "Turn data into actionable insights with advanced tools.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Leverage cloud technologies to optimize and scale your business.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group perspective w-full h-64"
            >
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 bg-blue-600 text-white flex flex-col items-center justify-center rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-blue-200 text-blue-900 flex flex-col items-center justify-center rounded-lg shadow-lg rotate-y-180">
                  <p className="text-lg px-4">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCard;
