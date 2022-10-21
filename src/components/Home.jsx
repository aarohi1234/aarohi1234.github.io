import React from "react";
import ProfileImage from "../assets/profileImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-red-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Hi 👋,<br />
I'am Nidhi <br />
MERN Stack Developer
          </h2>
         
          {/* <p className="text-gray-500 py-4 max-w-md">I am a passionate Full Stack Web Developer who focuses on writing clean
and user-friendly applications using
JavaScript
and some other cool libraries and frameworks.</p> */}

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              My Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-12xl mx-auto w-2/3 md:w-96 p-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
