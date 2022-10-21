import React from "react";
import './Project.css';
import tripoto from "../assets/project/tripoto.png";
import kfc from "../assets/project/kfc.png";
import cronometer from '../assets/project/cronometer.png'


const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      src: cronometer,
      title:"Cronometer Web Clone",
      description :"Dineout is a table booking platform helping customers to do table booking in their favourite restaurants. We were a team of four members, distributed the whole website amoung us. and make a clone website of Dineout in 5 days.",
      techstack: "HTML, CSS, JavaScript, Json-Server,DOM Api ",
      live : "starlit-cassata-1a3d24.netlify.app/",
      code : "https://github.com/aarohi1234/cronometer-web-clone"
    },
    {
      id: 2,
      src: tripoto,
      title:"Tripoto Web Clone",
      description :"Tripoto is the best travel planner app India, as it lets you discover itineraries, reviews & travel stories by real travellers",
      techstack: "HTML, CSS, JavaScript, DOM Api",
      live: "https://630b2882801d6f1f698c876e--taupe-klepon-f0f1db.netlify.app/index.html",
      code:"https://github.com/aarohi1234/glistening-rock-2573"
   
    },
    {
      id: 3,
      src: kfc,
      title:"KFC Web Clone",
      description :"A clone of KFC US website, built with JavaScript, HTML5, CSS. User can signup, login, explore the menu, add items to the cart and buy them",
      techstack: "HTML, CSS, JavaScript",     
        live : "https://venerable-sprite-c3ed8d.netlify.app/homepage",
        code : "https://github.com/aarohi1234/KFC-clone",
    },
    
  ];

  return (
    <div
      name="projects"

      // 
      className="bg-gradient-to-b from-black to-red-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,description,techstack, live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className=" own-container">
                <p className="title-own font-bold ">{title}</p>
                <p className="desc-own font-light">{description}</p>
                <hr />
                <p className="tech-title-own font-bold ">Tech Stack</p>
                <p className="techstack-own font-medium">{techstack}</p>            
                
              </div>
              <hr />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(live)}>
                  Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(code)}>
                  Code
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
