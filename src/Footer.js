import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-xl font-bold mb-4 md:mb-0">
            LearnMoreTechnology
          </h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} LearnMoreTechnology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
