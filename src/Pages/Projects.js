import React, { useState } from "react";
import Navbar from "../components/Navbar";
import I1 from "../Images/1.png";
import I2 from "../Images/2.png";
import I3 from "../Images/3.JPG";
import I4 from "../Images/4.jpg";
import I5 from "../Images/5.png";
import I6 from "../Images/Invitation.jpg";
import I7 from "../Images/BusinessCard3.jpg";
import I8 from "../Images/8.jpg";
import I9 from "../Images/9.jpg";
import I10 from "../Images/10.jpg";
import I11 from "../Images/11.jpg";
import I12 from "../Images/01.png";
import I13 from "../Images/02.png";
import I14 from "../Images/03.png";
import I15 from "../Images/04.png";
import I16 from "../Images/05.png";
import U1 from "../Images/U1.jpg";
import U2 from "../Images/U2.jpg";
import U3 from "../Images/U3.jpg";
import U4 from "../Images/U4.jpg";
import I17 from "../Images/17.jpg";
import I18 from "../Images/WeddingInvitation1.jpg";
import I19 from "../Images/LOGO.jpg";
import I20 from "../Images/NEWLOGO.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("websites");

  const tabs = [
    { id: "websites", label: "Websites" },
    { id: "ui/ux", label: "UI/UX Designs" },
    { id: "mobileApps", label: "Mobile Apps" },
    { id: "graphicDesigns", label: "Graphic Designs" },
  ];

  return (
    <div className="bg-blue-950 w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full bg-blue-950 z-10">
        <Navbar />
        <div className="text-gray-400 text-[25px] sm:text-[28px] md:text-[30px] lg:text-[35px] font-bold mt-4 text-center">
          Projects
        </div>
        {/* Selection Bar */}
        <div className="bg-gray-300 mt-4 py-0">
          <div className="flex h-[40px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 text-[10px] sm:text-sm md:text-[16px] lg:text-lg  font-semibold text-black ${
                  activeTab === tab.id
                    ? "bg-gray-600 text-white"
                    : "bg-transparent hover:bg-gray-600 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="mt-[250px] h-[calc(100vh-200px)] overflow-y-auto px-8 sm:px-16 md:px-32 lg:px-[135px] xl:px-[150px] 2xl:px-48">
        {activeTab === "websites" && (
          <div>
            <div className="xl:flex xl:items-center sm:mb-24 xl:mb-24">
              <div className="flex justify-center ">
                <img
                  src={I1}
                  className=" w-[200px] h-[150px] sm:w-[400px] sm:h-[250px]  lg:w-[500px] lg:h-[300px] xl:w-[3000px] xl:h-[300px]"
                />
              </div>
              <div className="xl:pl-16">
                <div className="text-md md:text-lg xl:text-xl mt-4 text-white font-bold">
                  Web Solution for Wasana Bakers Pvt Ltd (Group Project)
                </div>
                <div className=" text-white text-sm sm:text-[15px] md:text-[16px] lg:text-md text-justify pt-2 xl:pt-6 pb-4">
                  Wasana Bakers Pvt. Ltd. is a website developed by Team Phoenix
                  as their final project, showcasing a seamless and feature-rich
                  platform tailored for customers, branch owners, and
                  administrators. The system delivers a smooth experience,
                  starting with user-friendly sign-ins and sign-ups, and extends
                  to real-time order tracking, making it efficient and
                  convenient for everyone involved. Key features include contact
                  forms for easy communication, branch application and
                  management, product ordering with real-time updates, and
                  comprehensive admin functionality to ensure smooth operations.
                </div>
                <div className="flex justify-between pt-2 xl:pt-4 mb-8 xl:mb-0">
                  <a href="https://www.linkedin.com/posts/smschathuranga_systemdemo-techinnovation-universityofjaffna-activity-7276101601231036416-DYeN?utm_source=share&utm_medium=member_desktop">
                    <button className="bg-yellow-500 w-32 md:w-36 lg:w-[180px] xl:w-60 text-white py-1  xl:px-2 xl:py-1 rounded-lg font-semibold text-sm md:text-md xl:text-lg hover:bg-yellow-600">
                      View in Linkedin
                    </button>
                  </a>
                  {/*<button className="bg-yellow-500 w-32 md:w-48 xl:w-60 text-white  py-1 xl:px-4 rounded-lg font-semibold text-sm md:text-lg xl:text-2xl hover:bg-yellow-600">
                            View in Github
                          </button> */}
                </div>
              </div>
            </div>

            <div className="xl:flex xl:items-center sm:mb-24 xl:mb-24">
              <div className="flex justify-center ">
                <img
                  src={I2}
                  className="w-[200px] h-[150px] sm:w-[400px] sm:h-[250px]  lg:w-[500px] lg:h-[300px] xl:w-[3000px] xl:h-[300px]"
                />
              </div>
              <div className="xl:pl-16">
                <div className="text-md md:text-lg xl:text-xl mt-4 text-white font-bold">
                  BookFlow- Simplity Book Management, Effortlessly
                </div>
                <div className=" text-white text-sm sm:text-[15px] md:text-[16px] lg:text-md text-justify pt-2 xl:pt-6 pb-4">
                  BookFlow is a user-friendly book management system designed to
                  simplify tasks such as adding, updating, and deleting books,
                  making it ideal for libraries, educators, and personal
                  collections. Built using modern technologies like ReactJS,
                  Node.js, Tailwind CSS, and MySQL, it offers a seamless and
                  efficient experience for managing book inventories. With
                  intuitive features for effortless inventory management and
                  secure user authentication for registering and signing in,
                  BookFlow ensures a reliable and convenient solution for
                  organizing your book collection.
                </div>
                <div className="flex justify-between pt-2 xl:pt-4 mb-8 xl:mb-0">
                  <a href="https://www.linkedin.com/posts/nipuni-fernando-01828b1b0_webdevelopment-reactjs-tailwindcss-activity-7283349749250904067-dzyV?utm_source=share&utm_medium=member_desktop">
                    <button className="bg-yellow-500 w-32 md:w-36 lg:w-[180px] xl:w-60 text-white py-1  xl:px-2 xl:py-1 rounded-lg font-semibold text-sm md:text-md xl:text-lg hover:bg-yellow-600">
                      View in Linkedin
                    </button>
                  </a>
                  {/*<button className="bg-yellow-500 w-32 md:w-48 xl:w-60 text-white  py-1 xl:px-4 rounded-lg font-semibold text-sm md:text-lg xl:text-2xl hover:bg-yellow-600">
                            View in Github
                          </button> */}
                </div>
              </div>
            </div>

            <div className="xl:flex xl:items-center pb-24">
              <div className="flex justify-center ">
                <img
                  src={I3}
                  className="w-[200px] h-[150px] sm:w-[400px] sm:h-[250px]  lg:w-[500px] lg:h-[300px] xl:w-[2500px] xl:h-[300px]"
                />
              </div>
              <div className="xl:pl-16">
                <div className="text-md md:text-lg xl:text-xl mt-4 text-white font-bold">
                  CakeBitz - Baked with love..
                </div>
                <div className=" text-white text-sm sm:text-[15px] md:text-[16px] lg:text-md text-justify pt-2 xl:pt-6 pb-4">
                  This website is about showcasing the wide range of delightful
                  treats offered by Cake Bitz, including customized cakes,
                  birthday cakes, and more. It aims to enhance customer
                  engagement by providing an easy-to-use platform where
                  customers can browse and select designs for their special
                  occasions. With its filtered format, the website makes it
                  simple for users to explore and choose from a variety of
                  products, ensuring a seamless and enjoyable experience.
                </div>
                <div className="text-gray-400 text-xl font-semibold ">
                  In progress
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ui/ux" && (
          <div>
            <div className="mb-16 xl:mb-20 mx-8">
              <div className="flex justify-between mb-4">
                <div className="text-md md:text-lg lg:text-xl  text-white font-bold ">
                  TravelGo - MobileApp
                </div>
                <a href="https://www.figma.com/design/U7nDsKcEi8O5C3FWSeLH7L/TravelGo---MobilApp?node-id=0-1&t=QevoN1QNHK8kGwIY-1">
                  <button className="bg-yellow-500 w-32  md:w-36 lg:w-48 xl:w-60 text-white px-4 py-1 rounded-lg font-semibold text-sm md:text-md xl:text-lg hover:bg-yellow-600">
                    Visit Link
                  </button>
                </a>
              </div>
              <div className="">
                <img
                  src={U1}
                  className="w-[1000px] h-[220px] sm:h-[280px] md:w-[2000px] md:h-[330px] lg:w-[2500px] lg:h-[500px] xl:h-[600px]"
                />
              </div>
            </div>

            <div className="mb-16 xl:mb-20 mx-8">
              <div className="flex justify-between mb-4">
                <div className="text-md md:text-lg lg:text-xl  text-white font-bold ">
                  Personal portfolio - website
                </div>
                <a href="https://www.figma.com/proto/nzROxWSlvBQKULCzBcsbge/Portfolio---website?page-id=0%3A1&node-id=5-2&viewport=246%2C340%2C0.14&t=tcLP3PFAy2HmotLd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A2">
                  <button className="bg-yellow-500 w-32 md:w-36 lg:w-[180px] xl:w-60 text-white px-4 py-1  rounded-lg font-semibold text-sm md:text-md xl:text-lg hover:bg-yellow-600">
                    Visit Link
                  </button>
                </a>
              </div>
              <div className="">
                <img
                  src={U3}
                  className="w-[1000px] h-[200px] sm:h-[280px] md:w-[2000px] md:h-[330px] lg:w-[2500px] lg:h-[500px] xl:h-[600px]"
                />
              </div>
            </div>

            <div className="mb-16 xl:mb-20 mx-8">
              <div className="flex justify-between mb-4">
                <div className="text-md md:text-lg lg:text-xl  text-white font-bold ">
                  Website design project - BookFlow
                </div>
                <a href="https://www.figma.com/design/EFqDaHWFVT3bqYt79wrZnf/BookFlow---website?node-id=0-1&t=y4j6XQibpKDb8DOx-1">
                  <button className="bg-yellow-500 w-32 md:w-36 lg:w-[180px] xl:w-60 text-white px-4 py-1  rounded-lg font-semibold text-sm md:text-md xl:text-lg hover:bg-yellow-600">
                    Visit Link
                  </button>
                </a>
              </div>
              <div className="">
                <img
                  src={U2}
                  className="w-[1000px] h-[200px] sm:h-[280px] md:w-[2000px] md:h-[330px] lg:w-[2500px] lg:h-[500px] xl:h-[600px]"
                />
              </div>
            </div>

            <div className="mx-8">
              <div className="flex justify-between mb-4">
                <div className="text-md md:text-lg lg:text-xl  text-white font-bold">
                  Website design project - CakeBitz
                </div>
                <a href="https://www.figma.com/design/wgzu0RSf2Z77UEwzAK9VjB/CakeBitz---website?node-id=0-1&t=BCE9V7kzEN6rDfTL-1">
                  <button className="bg-yellow-500 w-32 md:w-36 lg:w-[180px] xl:w-60 text-white px-4 py-1 rounded-lg font-semibold text-sm md:text-md xl:text-lg hover:bg-yellow-600">
                    Visit Link
                  </button>
                </a>
              </div>
              <div className="pb-32">
                <img
                  src={U4}
                  className="w-[1000px] h-[200px] sm:h-[280px] md:w-[2000px] md:h-[330px] lg:w-[2500px] lg:h-[500px] xl:h-[600px]"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "mobileApps" && (
          <div>
            <div className="xl:flex xl:items-center pb-8 xl:pb-16 mx-8">
              <div className="flex justify-center ">
                <img
                  src={I4}
                  className=" w-[350px] h-[200px] sm:w-[400px] sm:h-[300px]  lg:w-[600px] lg:h-[350px] xl:w-[3800px] xl:h-[300px]"
                />
              </div>
              <div className="xl:pl-16">
                <div className="text-md md:text-lg xl:text-xl mt-4 text-white font-bold">
                  Recipe Book - 2 members
                </div>
                <div className=" text-white text-[12px] sm:text-[15px] md:text-[16px] lg:text-md text-justify pt-2 xl:pt-6 pb-4">
                  Recipe Book is a feature-rich mobile app designed to bring
                  culinary inspiration to your fingertips. With recipes
                  organized into various categories, it offers a seamless way to
                  explore a world of flavors. Each recipe comes complete with
                  ingredients, step-by-step directions, and even photos or
                  videos for select dishes, ensuring an engaging and
                  user-friendly experience. The app also includes a unique
                  feature to access translated recipes in Sinhala, making it
                  accessible and convenient for a wider audience. Whether you're
                  a seasoned chef or a kitchen novice, Recipe Book has
                  everything you need to create delicious meals effortlessly!
                </div>
                <div className="text-gray-400  text-sm sm:text:md md:text:lg xl:text-xl font-semibold ">
                  Present
                </div>
              </div>
            </div>

            <div className="xl:flex xl:items-center pb-24 mx-8">
              <div className="flex justify-center ">
                <img
                  src={I17}
                  className=" w-[350px] h-[200px] sm:w-[400px] sm:h-[300px]  lg:w-[600px] lg:h-[350px] xl:w-[4000px] xl:h-[300px]"
                />
              </div>
              <div className="xl:pl-16">
                <div className="text-md md:text-lg xl:text-xl mt-4 text-white font-bold">
                  Astro Budget - 2 members
                </div>
                <div className=" text-white text-[12px] sm:text-[15px] md:text-[16px] lg:text-md text-justify pt-2 xl:pt-6 pb-4">
                  Astro Budget is a comprehensive mobile app designed to help
                  users manage their finances with ease and precision. The app
                  provides an intuitive platform to organize income on a daily,
                  weekly, or annual basis, ensuring you stay on top of your
                  financial goals. With its user-friendly interface, Astro
                  Budget also allows users to input and categorize their
                  expenses effectively. By generating detailed insights and
                  summaries, the app helps users visualize their spending
                  patterns and make informed decisions. Whether you're planning
                  for a specific goal or simply looking to manage your money
                  better, Astro Budget empowers you to take control of your
                  finances with clarity and confidence.
                </div>
                <div className="text-gray-400 text-sm sm:text:md md:text:lg xl:text-xl  font-semibold ">
                  In progress
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "graphicDesigns" && (
          <div>
            <div className="mt-8  bg-white mx-8 md:mx-0">
              <div className="flex justify-between py-2 md:py-4 px-8 text-md md:text-lg xl:text-xl font-semibold bg-gray-200 border-b-4  border-gray-300">
                <div className="">Logo Designs</div>
                <div className="">3 Items</div>
              </div>

              <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-24 justify-center items-center md:py-4">
                <div className="flex justify-center ">
                  <img
                    src={I19}
                    className="w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]"
                  />
                </div>
                <div className="flex justify-center ">
                  <img
                    src={I5}
                    className="w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]"
                  />
                </div>
                <div className="flex justify-center ">
                  <img
                    src={I20}
                    className="w-[150px] h-[150px]  lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8  bg-white mx-8 md:mx-0">
              <div className="flex justify-between py-2 md:py-4 px-8 text-md md:text-lg xl:text-xl font-semibold bg-gray-200 border-b-4  border-gray-300">
                <div className="">Wedding Invitations</div>
                <div className="">2 Items</div>
              </div>

              <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-24 justify-center items-center md:pb-8">
                <div className="flex justify-center ">
                  <img
                    src={I6}
                    className="mt-4 md:mt-8 w-[200px] h-[300px] md:w-[220px] md:h-[350px] lg:w-[300px] lg:h-[500px] "
                  />
                </div>
                <div className="flex justify-center ">
                  <img
                    src={I18}
                    className="mt-4 md:mt-8 w-[200px] h-[300px] md:w-[220px] md:h-[350px] lg:w-[300px] lg:h-[500px] "
                  />
                </div>
              </div>
            </div>

            <div className="mt-8  bg-white mx-8 md:mx-0">
              <div className="flex justify-between py-2 md:py-4 px-8 text-md md:text-lg xl:text-xl font-semibold bg-gray-200 border-b-4  border-gray-300">
                <div className="">Bussinesscard Designs</div>
                <div className="">1 Item</div>
              </div>

              <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-24 justify-center items-center md:pb-8">
                <div className="flex justify-center ">
                  <img
                    src={I7}
                    className="my-4 md:my-8 w-[200px] h-[120px] md:w-[300px] md:h-[170px] lg:w-[400px] lg:h-[220px] "
                  />
                </div>
              </div>
            </div>

            <div className="mt-8  bg-white mx-8 md:mx-0">
              <div className="flex justify-between py-2 md:py-4 px-8 text-md md:text-lg xl:text-xl font-semibold bg-gray-200 border-b-4  border-gray-300">
                <div className="">Flayer Designs</div>
                <div className="">4 Items</div>
              </div>

              <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-24  justify-center items-center md:py-8">
                <div className="flex justify-center pt-4 md:pt-0">
                  <img
                    src={I8}
                    className="w-[200px] h-[320px] md:w-[250px] md:h-[350px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] "
                  />
                </div>

                <div className="flex justify-center pt-4 md:pt-0">
                  <img
                    src={I9}
                    className="w-[200px] h-[320px] md:w-[250px] md:h-[350px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] "
                  />
                </div>
              </div>
              <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-24  justify-center items-center md:py-8">
                <div className="flex justify-center pt-4 md:pt-0">
                  <img
                    src={I10}
                    className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] "
                  />
                </div>

                <div className="flex justify-center py-4 md:py-0">
                  <img
                    src={I11}
                    className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] "
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 mb-24 bg-white mx-8 md:mx-0">
              <div className="flex justify-between py-2 md:py-4 px-8 text-md md:text-lg xl:text-xl font-semibold bg-gray-200 border-b-4  border-gray-300">
                <div className="">Canva Designs</div>
                <div className="">4 Items</div>
              </div>

              <div className="lg:flex lg:space-x-8  md:space-x-2 lg:mx-4 lg:items-center lg:justify-center">
                <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-8  justify-center items-center md:py-8">
                  <div className="flex justify-center pt-4 md:pt-0">
                    <img
                      src={I12}
                      className="w-[200px] h-[400px] md:w-[250px] md:h-[500px] lg:w-[300px] lg:h-[350px] xl:w-[370px] xl:h-[500px] "
                    />
                  </div>

                  <div className="flex justify-center pt-4 md:pt-0">
                    <img
                      src={I13}
                      className="w-[200px] h-[400px] md:w-[250px] md:h-[500px] lg:w-[300px] lg:h-[350px] xl:w-[370px] xl:h-[500px] "
                    />
                  </div>
                </div>
                <div className="md:flex md:space-x-2 lg:space-x-4 xl:space-x-8  justify-center items-center md:py-8">
                  <div className="flex justify-center pt-4 md:pt-0">
                    <img
                      src={I12}
                      className="w-[200px] h-[400px] md:w-[250px] md:h-[500px] lg:w-[300px] lg:h-[350px] xl:w-[370px] xl:h-[500px] "
                    />
                  </div>

                  <div className="flex justify-center py-4 md:py-0">
                    <img
                      src={I12}
                      className="w-[200px] h-[400px] md:w-[250px] md:h-[500px] lg:w-[300px] lg:h-[350px] xl:w-[370px] xl:h-[500px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
