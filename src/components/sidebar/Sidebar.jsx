import React from 'react';
import "./sidebar.css";
import Me from "../../assets/Me.jpg"
import { Link } from "react-scroll";
import pri from "../resumesOriginal/nidhi_resume.pdf";


const Sidebar =() =>{
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img className="nav__logonew" src={Me} alt="return to top" width="400" height="400" />
            </a>
            
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        
                       <li className='nav__item'>
                        <a href ="#home" className='nav__link'>
                            <i className="icon-home"></i>
                            
                        </a>
                        <p className="hide">Home</p>
                       </li>

                       <li className='nav__item'>
                        <a href ="#about" className='nav__link'>
                        <i className="icon-user-following"></i>
                        
                        </a>
                        <p className="hide">About</p>
                       </li>

                       <li className='nav__item'>
                        <a href ="#resume" className='nav__link'>
                        <i className="icon-graduation"></i>
                        </a>
                        <p className="hide">Education</p>
                       </li>

                    <li className='nav__item'>
                    <Link
                        className="nav__link"
                        to="services"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                    
                  
                    <i className="icon-briefcase"></i>
                    
                    
                    </Link>
                    <p className="hide">Projects</p>
                    </li>
                  
                    <li className='nav__item'>
                    <Link
                        className="nav__link"
                        to="skills"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                    <i className="icon-layers"></i>
                    </Link>
                    <p className="hide">Skills</p>
                    </li>

                    <li className='nav__item'>
                    <Link
                        className="nav__link"
                        to="git"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                    <i className="icon-note"></i>
                    
                    </Link>
                    <p className="hide">Github</p>
                    </li>




                  

                       <li className='nav__item'>
                        
                        <a href ="#contact" className='nav__link'>
                        <i className="icon-bubble"></i>
                        </a>
                        <p className="hide">Contact</p>
                       </li>
                        
                        
                       <li className='nav__item'>
                        
                       <a href={pri} className='nav__link' id='download' download>
                        <i className="icon-link" onClick={
                            ()=>{
                                window.open("https://drive.google.com/file/d/1IF3929zHAgR0qul32yNbk7_SotQU4qPo/view?usp=share_link")
                            }
                        }></i>
                        </a>
                        <p className="hide">ResumeLink</p>
                       </li>
                       

                    </ul>

                </div>

            </nav>
        
        <div className="nav__footer">
            <span className='copyright'>Nidhi Kumari</span>
        </div>
      
        </aside>
    )
}

export default Sidebar