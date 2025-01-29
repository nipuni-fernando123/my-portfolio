import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center lg:justify-end mt-8 mb-4 lg:mr-8">
      <ul className="flex text-white font-semibold text-sm lg:text-2xl">
        <li><Link to="/my-portfolio/" className="px-6 no-underline hover:text-yellow-500 mb-2">Home</Link></li>
        <li><Link to="/my-portfolio/about" className="px-6 no-underline hover:text-yellow-500">About</Link></li>
        <li><Link to="/my-portfolio/projects" className="px-6 no-underline hover:text-yellow-500">Projects</Link></li>
        <li><Link to="/my-portfolio/contact" className="px-6 no-underline hover:text-yellow-500">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
