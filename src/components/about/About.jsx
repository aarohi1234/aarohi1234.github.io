import React from 'react'
import "./about.css"
import Me from "../../assets/Me.jpg"
import pri from "../resumesOriginal/nidhi_resume.pdf";



const About = () => {
  console.log(pri)
  return(
   <section className="about container section" id="about">


    
    <div className="about__container grid">
      <div className="about__img" >
      <img src={Me} alt="" />
      <p  className="about__img_name">Nidhi Kumari</p>
      </div>

      
      
      
    
    <div className="about__data grid">
      <div className="about__info">
       <h4 className="description">
        
        <a href=""><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=40&pause=500&color=teal&width=700&height=70&lines=HELLO  Welcome.." alt="Typing SVG" id='moving'/></a>
        

        <br>
        </br>
        <div id="newintro">

        
        <p id="intro">I am Nidhi Kumari.
        <br/>

        I am a Full Stack Web Developer and Problem Solver, passionate about building digital products that improve everyday experience for people.


        <br/>
        
I am Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer. .</p>
        
        </div>
       </h4>
       <a href={pri} className="btn btndownload" download
        >Download Resume</a>

      </div>
 
    </div>
    </div>
   </section>
  )
  }


export default About