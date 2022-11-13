import React from 'react'

export const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__subject">{props.subject}</p>
        <p className="timeline__insti">{props.insti}</p>
        <p className="timeline__place">{props.place}</p>
        <span className="timeline__date">{props.year}</span>
        
    </div>
  )
}
