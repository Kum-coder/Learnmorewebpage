import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold mb-4">LearnMoreTechnology</h1>

        {/* Social Media Links */}
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
        <p className="text-sm">
          © {new Date().getFullYear()} LearnMoreTechnology. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
