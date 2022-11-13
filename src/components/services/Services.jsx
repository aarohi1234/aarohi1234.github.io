import React from 'react'
import "./services.css";
import cronometer from "../../assets/cronometer.png";
import tripoto from "../../assets/tripoto.png";
import kfc from "../../assets/kfc.png"
import zara from "../../assets/zara.png"

const data =[
  {
    id:1,
    image: cronometer,
    title:"Cronometer  Clone",
    about:"Cronometer helps you develop healthy habits by encouraging you to not just focus on counting calories but on your nutrition as a whole.  ",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/aarohi1234/cronometer-web-clone`,
    netlify:`https://aarohi1234.github.io/cronometer-web-clone/`
  },
  {
    id:2,
    image: tripoto,
    title:"Tripoto Clone",
    about:"Tripoto is the best travel planner app India, as it lets you discover itineraries, reviews & travel stories by real travellers",
    techstack: "HTML, CSS, JavaScript, DOM Api",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/aarohi1234/glistening-rock-2573`,
    netlify:`https://630b2882801d6f1f698c876e--taupe-klepon-f0f1db.netlify.app/index.html`
  },
  {
    id:3,
    image: kfc,
    title:"KFC Clone",
    about:"A clone of KFC US website, built with JavaScript, HTML5, CSS. User can signup, login, explore the menu, add items to the cart and buy them.",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/aarohi1234/KFC-clone`,
    netlify:`https://venerable-sprite-c3ed8d.netlify.app/homepage`
  },
  {
    id:3,
    image: zara,
    title:"Zara Clone",
    about:"An Ecommerce Website.",
    description :"Tech-Stack : React.js,redux,chakra-UI",
    git:``,
    netlify:``
  }
]

const Services = () => {
  return <section className='services container section' id="projects">
    <h3 className="section__title" id='project'>Projects </h3>

    <div className="services__container grid">
      {data.map (({id,image,title,about,description,git,netlify}) => {
        return(
        <div className='services__card'key={id}>
          <img src={image} alt="" className="services__img"/>
          <h3 className='services__title'>{title}</h3>
          <div className='ptagabout'>
          <p className='services__about'>{about}</p>
          <p className='services__description'>{description}</p>
          </div>
          <a href={git} className='services__github' >
          
          <i class="fa-brands fa-github fa-gitgit" id='fa-github' ></i>
          
          </a>
          
          <a href={netlify} className='services__netlify'>
          
          <i class="fa-solid fa-globe"></i>
         
          </a>
          
          
        </div>
      )
      })}
    </div>
  </section>
}

export default Services