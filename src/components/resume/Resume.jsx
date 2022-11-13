import React from 'react'
import "./resume.css"
import Data from "./Data";
import { Card } from './Card';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education </h2>

        <div className="resume__container grid">
          <div className="timeline grid">
    {Data.map((val, id)=> {
      if(val.category ==="Education") {
        return (
          <Card key={id} 
          icon={val.icon} 
          title={val.title}
          year={val.year}
          des={val.subject}
          insti={val.insti}
          place={val.place}
          />
        )
      }
    }) }
          </div>

        </div>


        {/* <h2 className="section__title">Internship </h2> */}
        {/* <div className="resume__container grid" >
          <div id='intern'>

          
          <div className="timeline grid " id="intership">
    {Data.map((val, id)=>{
      if(val.category ==="Internship") {
        return (
          
             <Card key={id} 
          icon={val.icon} 
          title={val.title}
          year={val.year}
          des={val.subject}
          insti={val.insti}
          place={val.place}
          />
          
         
        )
      }
    })}
          </div>
          </div>
        </div> */}

    </section>
  )
}

export default Resume