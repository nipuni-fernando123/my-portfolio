import React, { useState } from "react";
import pic from "../Images/pic.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import resume from "../Images/CV_NipuniFernando.pdf";

function Home() {
  return (
    <div className=" bg-blue-950 h-screen overflow-hidden ">
      <Navbar />
      <div className="lg:flex sm:justify-center  sm:items-center h-screen sm:mt-16 lg:mt-[-20px] xl:mt-[-50px] ">
        <div className="flex justify-center items-center">
          <img
            src={pic}
            className="rounded-full border-4 border-yellow-500 w-40 h-40 md:w-60 md:h-60  lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px]"
          />
        </div>
        <div className=" md:px-4  mt-4 sm:justify-center sm:items-center xl:pl-16">
          <div className="text-white text-center lg:text-justify text-[20px] md:text-[25px] lg:text-[27px] xl:text-[35px]">
            Hello, I'm
          </div>
          <div className="text-[40px] text-center lg:text-justify md:text-[50px] lg:text-[70px] xl:text-[100px] text-yellow-500 font-bold">
            Nipuni Fernando
          </div>
          <div className="text-white  text-center lg:text-justify text-[12px] md:text-[20px] lg:text-[22px] xl:text-[35px] font-semibold ">
            {" "}
            <span className="mr-4 md:mr-4 lg:mr-16">UI/UX Designer </span>|{" "}
            <span className="mx-4 md:mx-4 lg:mx-16">Frontend Developer</span>|{" "}
            <br />{" "}
            <span className="mr-4 md:mr-4 lg:mr-16">Mobile App Developer </span>
            | <span className="mx-4 md:mx-4 lg:mx-16">Graphic Designer</span>
          </div>
          <div className="flex  justify-center items-center lg:justify-between lg:mx-24 xl:mx-48 mt-4 lg:mt-12">
            <a href="https://www.linkedin.com/in/nipuni-fernando-01828b1b0/">
              <FaLinkedin
                color="white"
                className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] mr-2 md:mr-4 lg:mr-0"
              />
            </a>
            <a href="https://github.com/nipuni-fernando123">
              <FaGithub
                color="white"
                className="text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] mr-2 md:mr-4 lg:mr-0"
              />
            </a>
            <a href={resume} download="Resume">
              <button className="bg-yellow-500 lg:w-60 w-40 text-white py-1 px-1 lg:px-2 lg:py-1 xl:px-4 xl:py-2 rounded-lg font-semibold text-md lg:text-xl xl:text-2xl hover:bg-yellow-600">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
