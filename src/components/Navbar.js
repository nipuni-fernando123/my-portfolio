import React from 'react';

const Navbar = () => {
  return (
    <div>
       <div className=" flex justify-center  lg:justify-end mt-8 mb-4 lg:mr-8">
    
      <ul className="flex text-white font-semibold  text-sm lg:text-2xl ">
        <li><a href="/" className="px-6 no-underline hover:text-yellow-500 mb-2">Home</a></li>
        <li><a href="/about" className="px-6 no-underline hover:text-yellow-500  ">About</a></li>
        <li><a href="/projects" className="px-6 no-underline hover:text-yellow-500 ">Projects</a></li>
        <li><a href="/contact" className="px-6 no-underline hover:text-yellow-500 ">Contact</a></li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
