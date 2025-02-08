import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <section
      ref={ref}
      className="bg-gray-100 py-16 px-4"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50px)",
        transition: "all 0.8s ease-in-out",
      }}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Experience
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover how LearnMoreTechnology can help you achieve your goals with
          innovative solutions and expert guidance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSection;
