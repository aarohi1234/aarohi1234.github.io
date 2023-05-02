import React, { useState } from "react";
import { Link } from "react-scroll";
import { TbExternalLink } from "react-icons/tb";
import "../Styles/Navbar.css";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
 
  return (
    <div className="nav" id="nav-menu">
      <div>
        <Link to="home" spy={true} smooth={true} offset={-40} duration={500}>
          <i>
            <h3 className="logo">Nidhi Kumari </h3>
          </i>
        </Link>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="home" spy={true} smooth={true} offset={-45} duration={500}>
          <li onClick={() => setIsMobile(false)} className="nav-link home" id="tech-t1">
            Home
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-40} duration={500}>
          <li onClick={() => setIsMobile(false)} className="nav-link about" id="tech-t2">
            About
          </li>
        </Link>
        <Link to="skills" spy={true} smooth={true} offset={-40} duration={500}>
          <li onClick={() => setIsMobile(false)} className="nav-link skills" id="tech-t3">
            Skills
          </li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <li onClick={() => setIsMobile(false)} id="tech-t4">
            Projects
          </li>
        </Link>
        <Link
          to="statistics"
          spy={true}
          smooth={true}
          offset={-40}
          duration={700}
        >
          <li onClick={() => setIsMobile(false)} id="tech-t5">
            Statistics
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-40} duration={700}>
          <li onClick={() => setIsMobile(false)} className="nav-link contact" id="tech-t6">
            Contact
          </li>
        </Link>
        <li   className="nav-link resume" id="tech-t7">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="https://drive.google.com/file/d/17iJGwA9bhwfErq10WWT-hTc4bQJyGd93/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume <TbExternalLink />
          </a>
        </li>
      </ul>
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="mobile-menu-icon"
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </div>
  );
}
