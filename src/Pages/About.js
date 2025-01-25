import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import { BsFileCode } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="bg-blue-950 overflow-hidden h-screen">
      <div className="fixed top-0 left-0 w-full  z-10">
        <Navbar />
        <div className="text-gray-400 text-[30px] sm:text-[40px] md:text-[50px] font-bold mt-4 text-center">
          About Me
        </div>
        </div>

      <div className=" ">
        <div className="mt-[160px] lg:mt-[250px] h-[calc(100vh-200px)] lg:h-auto lg:flex lg:items-center lg:justify-center overflow-y-auto lg:overflow-hidden">
         

          <div className="flex justify-center items-center  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="mx-12 lg:mx-0 justify-center items-center  bg-white xl:w-[700px] lg:w-[500px]  h-max rounded-md border-8 border-yellow-500 sm:p-8 p-4">
                <div className="lg:flex lg:justify-between">
                  <div className="flex items-center justify-center">
                    <MdOutlineDesignServices
                      className="text-yellow-500"
                      size={100}
                    />
                  </div>
                  <div className="px-2 sm:px-4">
                    <div className="text-yellow-500 text-xl md:text-2xl text-center lg:text-left lg:text-3xl font-semibold pb-4">
                      UI/UX Designer
                    </div>
                    <div className="text-black text-md md:text-lg lg:text-xl text-justify">
                      UI/UX Designer skilled in creating intuitive, visually
                      engaging, and user-friendly experiences through research,
                      wireframing, and prototyping, ensuring a perfect blend of
                      function and aesthetics.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-12 lg:mx-0 justify-center items-center  bg-white xl:w-[700px] lg:w-[500px] h-max rounded-md border-8 border-yellow-500 sm:p-8 p-4">
                <div className="lg:flex lg:justify-between">
                  <div className="flex items-center justify-center">
                    <FaLaptopCode
                      className="text-yellow-500"
                      size={100}
                    />
                  </div>
                  <div className="px-2 sm:px-4">
                    <div className="text-yellow-500 text-xl md:text-2xl text-center lg:text-left lg:text-3xl font-semibold pb-4">
                    Frontend Developer
                    </div>
                    <div className="text-black text-md md:text-lg lg:text-xl text-justify">
                    Frontend Developer passionate about building responsive, user-centric web applications by transforming design concepts into functional, high-performance, and accessible interfaces.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-12 lg:mx-0 justify-center items-center  bg-white xl:w-[700px] lg:w-[500px] h-max rounded-md border-8 border-yellow-500 sm:p-8 p-4">
                <div className="lg:flex lg:justify-between">
                  <div className="flex items-center justify-center">
                    <BsFileCode
                      className="text-yellow-500"
                      size={100}
                    />
                  </div>
                  <div className="px-2 sm:px-4">
                    <div className="text-yellow-500 text-xl md:text-2xl text-center lg:text-left lg:text-3xl font-semibold pb-4">
                    Mobile App Developer
                    </div>
                    <div className="text-black text-md md:text-lg lg:text-xl text-justify">
                    Mobile App Developer specializing in designing and building high-performance Android applications with a focus on functionality, responsive design, and seamless user experience.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-12 lg:mx-0 mb-8 lg:mb-0 justify-center items-center  bg-white xl:w-[700px] lg:w-[500px] h-max rounded-md border-8 border-yellow-500 sm:p-8 p-4">
                <div className="lg:flex lg:justify-between">
                  <div className="flex items-center justify-center">
                    <FaPaintBrush
                      className="text-yellow-500"
                      size={100}
                    />
                  </div>
                  <div className="px-2 sm:px-4">
                    <div className="text-yellow-500 text-xl md:text-2xl text-center lg:text-left lg:text-3xl font-semibold pb-4">
                    Graphic Designer
                    </div>
                    <div className="text-black text-md md:text-lg lg:text-xl text-justify">
                      
                  Graphic Designer with a talent for creating visually impactful designs, specializing in branding, illustration, and visual storytelling to effectively communicate ideas and engage audiences.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
