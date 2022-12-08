import React from "react";
import "../Styles/About.css";
import codeGif from "../Images/code.gif";
export default function About() {
  return (
    <div className="mainContainer" id="about">
      <h1 className="heading">About myself</h1>
      <hr className="line" />
      <div className="aboutContainer">
        <img className="codeGif" src={codeGif} alt="codeGif" />
        <div className="paraContainer">
          <p className="para">
          I am Nidhi Kumari.
I am a Full Stack Web Developer and Problem Solver, passionate about building digital products that improve everyday experience for people.
I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer. .
          </p>
          <p className="para">
            Well organised person, problem solver with high attention to details
            and ability to exploring and implementing new things,
          </p>
          <p className="para">
            Interested In: Coding | Data Structure & Algorithms
          </p>
        </div>
      </div>
    </div>
  );
}
