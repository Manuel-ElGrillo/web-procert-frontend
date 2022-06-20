import React from 'react'
import { NavLink } from 'react-router-dom'
import checkListImg from "../../../assets/img/checklist.png"
import videoimg from "../../../assets/img/video.png"
import "./SecundaryNavBar.css"

const SecundaryNavBar = () => {
  return (
    <>
    
        <nav className='secundary-navbar'>
            <NavLink to={"/requisitos"}>
                <img src={checkListImg} alt="Checklist" />
                <p>Requisitos</p> 
            </NavLink>

            <NavLink to={"/Tutoriales"}>
                <img src={videoimg} alt="Tutorials" />
                <p>Tutoriales</p> 
            </NavLink>
            
        </nav>

    </>
  )
}

export default SecundaryNavBar