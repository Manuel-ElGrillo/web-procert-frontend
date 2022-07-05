import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import checkListImg from "../../../assets/img/clipboard.png"
import videoimg from "../../../assets/img/tutorial.png"
import questionImg from "../../../assets/img/information.png"
import badgeImg from "../../../assets/img/cert.png"
import cancelImg from "../../../assets/img/file.png"
import "./SecundaryNavBar.css"

const SecundaryNavBar = ({reqHref, 
                          reqText, 
                          certHref, 
                          certText, 
                          faqHref, 
                          faqText, 
                          revokedHref, 
                          revokedText, 
                          tutorialHref, 
                          tutorialText}
) => {

  return (
    <>
    
        <nav className='secundary-navbar'>
            <NavLink to={reqHref}>
                <img src={checkListImg} alt="Checklist" />
                <p>{reqText}</p> 
            </NavLink>

            <a href={certHref}>
              <img src={badgeImg} alt="Badge" />
              <p>{certText}</p>
            </a>

            <HashLink to={faqHref}>
              <img src={questionImg} alt="FAQ" />
              <p>{faqText}</p>
            </HashLink>

            <a href={revokedHref}>
              <img src={cancelImg} alt="Certificados revocados" />
              <p>{revokedText}</p>
            </a>

            <NavLink to={tutorialHref}>
                <img src={videoimg} alt="Tutorials" />
                <p>{tutorialText}</p> 
            </NavLink>
            
        </nav>

    </>
  )
}

export default SecundaryNavBar