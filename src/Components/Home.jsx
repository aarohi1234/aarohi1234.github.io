import React from "react";
import profilePic from "../Images/nidhi.jpg";

import { BiDownload } from "react-icons/bi";
import "../Styles/Home.css";
export default function Home() {
  const onButtonClick = () => {
    fetch("Nidhi-Kumari-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Nidhi-Kumari-Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="homeContainer" id="hero">
      <div className="headingContainer">
        <p>Hey I'm,</p>
        <h2>Nidhi Kumari</h2>
        <h1> I Am Full Stack Web Developer.</h1>
        <button onClick={onButtonClick} className="resumeBtn">
          Resume{" "}
          <BiDownload
            style={{
              marginLeft: "8px",
              fontSize: "20px",
              alignmentBaseline: "0px",
            }}
          />
        </button>
      </div>
      <div className="profileContainer">
        <img className="profilePic" src={profilePic} alt="nidhi" />
      </div>
    </div>
  );
}
