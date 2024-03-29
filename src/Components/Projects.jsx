import React from "react";
import "../Styles/Projects.css";
import kfc from "../Images/kfc.png";
import cronometer from "../Images/cronometer.png";
import stayfit from "../Images/stayfit.png";
import smartbuy from "../Images/smartbuy.png";
import tripoto from "../Images/tripoto.png";

import { useState } from "react";
export default function Projects() {
  const [showP2, setShowP2] = useState(false);
  const projects = [
    {
      image: smartbuy,
      name: "Smart Buy",
      desc: "An individual major project where I've used the MERN stack to make the website fully functional along with backend integration and payment gateway integration.",
      techStack:
        "Html|Css|Reactjs|Redux js|Node js|Express js|Mongo DB",
      github: `https://github.com/aarohi1234/Smart_Buy`,
      demo: `https://yoursmartbuy.netlify.app/`,
    },
    {
      image: tripoto,
      name: "Tripoto ",
      desc: "Tripoto is the best travel planner app India, as it lets you discover itineraries, reviews & travel stories by real travellers",
      techStack: "React-Redux,Node,Express and Mongodb",
      github: `https://github.com/aarohi1234/Tripoto-clone`,
      demo: `https://chic-syrniki-568fa1.netlify.app/`,
    },

    {
      image: stayfit,
      name: "Myfitnesspal clone",
      desc: "  Myfitnesspal is a smartphone app and website that tracks diet and exercise.",

      techStack: "React-Redux,Node,Express and Mongodb",
      github: `https://github.com/aarohi1234/stayFit.com`,
      demo: `https://stayfits.vercel.app/`,
    },
  ];
  const projects2 = [
    {
      image: cronometer,
      name: "Cronometer  Clone",
      desc: "Cronometer helps you develop healthy habits by encouraging you to not just focus on counting calories but on your nutrition as a whole.  ",
      techStack: "HTML | CSS | Javascript",
      github: `https://github.com/aarohi1234/cronometer-web-clone`,
      demo: `https://aarohi1234.github.io/cronometer-web-clone/`,
    },

    {
      image: tripoto,
      name: "Tripoto Clone",
      desc: "Tripoto is the best travel planner app India, as it lets you discover itineraries, reviews & travel stories by real travellers",
      techStack: "HTML, CSS, JavaScript, DOM Api",
      github: `https://github.com/aarohi1234/glistening-rock-2573`,
      demo: `https://630b2882801d6f1f698c876e--taupe-klepon-f0f1db.netlify.app/index.html`,
    },
    {
      image: kfc,
      name: "KFC clone",
      desc: " A clone of KFC US website, built with JavaScript, HTML5, CSS. User can signup, login, explore the menu, add items to the cart and buy them.",
      techStack: "HTML | CSS | Javascript",
      github: `https://github.com/aarohi1234/KFC-clone`,
      demo: `https://venerable-sprite-c3ed8d.netlify.app/homepage`,
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
            <h1 className="projectHeading">{item.name}</h1>
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
                  rel="noopener noreferrer">
                  Demo
                </a>
              </button>
              <button className="live">
                <a
                  className="atag"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer">
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
                      rel="noopener noreferrer">
                      Demo
                    </a>
                  </button>
                  <button className="live">
                    <a
                      className="atag"
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer">
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
          onClick={() => setShowP2(!showP2)}>
          {showP2 ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
