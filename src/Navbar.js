import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LearnMoreTechnology</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
