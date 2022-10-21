import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-red-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
       Hi, my name is NIDHI KUMARI and I am a Full Stack Web Developer and Problem Solver, passionate about building digital products that improve everyday experience for people.


        </p>

        <br />

        <p className="text-xl">
       
I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
        </p>
      </div>
    </div>
  );
};

export default About;
