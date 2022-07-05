import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/img/logo.png"
import langBtn from "../../../assets/img/VZLA.png"
import "./Header.css"

const HeaderEN = () => {
  return (
    <>
    
      <header className='header'>

        <nav className='header_nav-bar'>

          <div>
            <NavLink to={"/en"}>
              <img src={logo} 
                   alt="Logo PROCERT" 
                   className='header_nav-bar__logo'/>
            </NavLink>
          </div>

          <NavLink to={"/en"} 
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Home
          </NavLink>

          <NavLink to={"/en/services"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Services
          </NavLink>

          <NavLink to={"/en/purchases"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Purchases
          </NavLink>

          <NavLink to={"/en/information"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Information
          </NavLink>

          <NavLink to={"/en/documentation"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Documentation
          </NavLink>

          <NavLink to={"/en/links"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Links
          </NavLink>

          <NavLink to={"/en/support"} 
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Support
          </NavLink>

          <div>
            <NavLink to={"/"}>
              <img src={langBtn}
                   alt="language" 
                   className='header_nav-bar__lang'/>
            </NavLink>
          </div>

        </nav>

      </header>
    
    </>
  )
}

export default HeaderEN