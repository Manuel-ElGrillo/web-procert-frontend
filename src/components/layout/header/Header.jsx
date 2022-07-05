import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../../assets/img/logo.png"
import langBtn from "../../../assets/img/USA.png"
import "./Header.css"

const Header = () => {
  return (
    <>
    
      <header className='header'>

        <nav className='header_nav-bar'>

          <div>
            <NavLink to={"/"}>
              <img src={logo} 
                   alt="Logo PROCERT" 
                   className='header_nav-bar__logo'/>
            </NavLink>
          </div>

          <NavLink to={"/"} 
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Inicio
          </NavLink>

          <NavLink to={"/servicios"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Servicios
          </NavLink>

          <NavLink to={"/compras"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Compras
          </NavLink>

          <NavLink to={"/informacion"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Información
          </NavLink>

          <NavLink to={"/documentacion"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Documentación
          </NavLink>

          <NavLink to={"/enlaces"}
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Enlaces de Interés
          </NavLink>

          <NavLink to={"/soporte"} 
                   className={ ({isActive}) => isActive ? "header_nav-bar__active " : "header_nav-bar__link" }>Soporte
          </NavLink>

          <div>
            <NavLink to={"/en"}>
              <img src={langBtn}
                   alt="Idioma" 
                   className='header_nav-bar__lang'/>
            </NavLink>
          </div>

        </nav>

      </header>
    
    </>
  )
}

export default Header