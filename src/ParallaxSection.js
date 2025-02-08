import React from "react";

const ParallaxSection = () => {
  return (
    <section
      className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?technology')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Innovate with Us</h2>
        <p className="text-lg mb-6">
          LearnMoreTechnology empowers businesses with cutting-edge solutions.
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
