import React from "react";
import "../Styles/Projects.css";
import kfc from "../Images/kfc.png";
import cronometer from "../Images/cronometer.png";

import tripoto from "../Images/tripoto.png";

import { useState } from "react";
export default function Projects() {
  const [showP2, setShowP2] = useState(false);
  const projects = [
    {
      image: tripoto,
      name: "Tripoto Clone",
      desc: "Tripoto is the best travel planner app India, as it lets you discover itineraries, reviews & travel stories by real travellers",
      techStack: "React-Redux,Node,Express and Mongodb",
      github: `https://github.com/aarohi1234/Tripoto-clone`,
      demo: `https://chic-syrniki-568fa1.netlify.app/`



    },
    {
      image: cronometer,
      name: "Cronometer  Clone",
      desc: "Cronometer helps you develop healthy habits by encouraging you to not just focus on counting calories but on your nutrition as a whole.  ",
      techStack: "HTML | CSS | Javascript",
      github: `https://github.com/aarohi1234/cronometer-web-clone`,
      demo: `https://aarohi1234.github.io/cronometer-web-clone/`
    },
    {
     
      image: kfc,
      name: "KFC clone",
      desc: " A clone of KFC US website, built with JavaScript, HTML5, CSS. User can signup, login, explore the menu, add items to the cart and buy them.",
      techStack: "HTML | CSS | Javascript",
      github: `https://github.com/aarohi1234/KFC-clone`,
      demo: `https://venerable-sprite-c3ed8d.netlify.app/homepage`
    },
  ];
  const projects2 = [
    {

      image: tripoto,
      name: "Tripoto Clone",
      desc: "Tripoto is the best travel planner app India, as it lets you discover itineraries, reviews & travel stories by real travellers",
      techStack: "HTML, CSS, JavaScript, DOM Api",
      github: `https://github.com/aarohi1234/glistening-rock-2573`,
      demo: `https://630b2882801d6f1f698c876e--taupe-klepon-f0f1db.netlify.app/index.html`







      
      
    },
    
  ];

  return (
    <div id="projects" className="pro">
      <h1 className="headingPro">My Projects</h1>
      <hr className="linePro" />
      {projects.map((item) => (
        <div key={item.name} className="commonContainer">
          <img className="commonPic" src={item.image} alt={item.name} />
          <div className="projectDetails">
            <h1 className="projectHeading">Clone: {item.name}</h1>
            <p className="projectPara">{item.desc}</p>
            <p className="teckStack">
              <span className="teckSpan">Tech Stack: </span>
              {item.techStack}
            </p>
            <div className="linkingBtn">
              <button className="live">
                <a
                  className="atag"
                  href={`${item.demo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </button>
              <button className="live">
                <a
                  className="atag"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        {showP2 &&
          projects2.map((item) => (
            <div key={item.name} className="commonContainer">
              <img className="commonPic" src={item.image} alt={item.name} />
              <div className="projectDetails">
                <h1 className="projectHeading">Name: {item.name}</h1>
                <p className="projectPara">{item.desc}</p>
                <p className="teckStack">
                  <span className="teckSpan">Tech Stack: </span>
                  {item.techStack}
                </p>
                <div className="linkingBtn">
                  <button className="live">
                    <a
                      className="atag"
                      href={`${item.demo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="live">
                    <a
                      className="atag"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        <button
          className={`live atag`}
          style={{
            display: "block",
            margin: "auto",
          }}
          onClick={() => setShowP2(!showP2)}
        >
          {showP2 ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
