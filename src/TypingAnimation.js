import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to{' '}
          <span className="text-yellow-400">
            <Typewriter
              words={['LearnMoreTechnology', 'Innovation Hub', 'Your Tech Partner']}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-lg">
          Empowering businesses and individuals with cutting-edge technology solutions.
        </p>
      </div>
    </section>
  );
};

export default TypingAnimation;
