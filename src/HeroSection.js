import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to LearnMoreTechnology
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering businesses and individuals with cutting-edge solutions.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#services"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
