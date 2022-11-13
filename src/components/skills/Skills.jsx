import React from 'react'
import "./skills.css";
import datas from "./datas";


const Skills = () => {
  return (
    <section  className="skills container section" >
      <h2 className="section__title grid">Tech Stack </h2>
      
    <div className="skills__list grid"> 
      {datas.map(({id,image,p}) => {
       return(
      <div className="skills__card grid" key={id}>
       <img src={image} alt="" className="skills__img" />
        <p className="skills__name" >{p}</p>
      </div>

       )
      })}
 </div>
    </section>
  )
}

export default Skills