import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import checkListImg from "../../../assets/img/checklist.png"
import videoimg from "../../../assets/img/video.png"
import questionImg from "../../../assets/img/question.png"
import badgeImg from "../../../assets/img/badge.png"
import cancelImg from "../../../assets/img/cancel.png"
import "./SecundaryNavBar.css"

const SecundaryNavBar = () => {
  return (
    <>
    
        <nav className='secundary-navbar'>
            <NavLink to={"/requisitos"}>
                <img src={checkListImg} alt="Checklist" />
                <p>Requisitos</p> 
            </NavLink>

            <a href={"https://ura.procert.net.ve/pscprocert/cadena.p7b"}>
              <img src={badgeImg} alt="Badge" />
              <p>Certificado Raíz SUSCERTE</p>
            </a>

            <HashLink to={"/informacion#faq"}>
              <img src={questionImg} alt="FAQ" />
              <p>FAQ</p>
            </HashLink>

            <a href={"https://ura.procert.net.ve/lcr/procertca.crl"}>
              <img src={cancelImg} alt="Certificados revocados" />
              <p>Lista de Certificados Revocados</p>
            </a>

            <NavLink to={"/Tutoriales"}>
                <img src={videoimg} alt="Tutorials" />
                <p>Tutoriales</p> 
            </NavLink>
            
        </nav>

    </>
  )
}

export default SecundaryNavBar