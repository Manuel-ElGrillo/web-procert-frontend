import React from 'react'
import { HashLink } from 'react-router-hash-link'
import youtubeLogo from "../../../assets/img/youtube.png"
import twitterLogo from "../../../assets/img/twitter.png"
import emailLogo from "../../../assets/img/arroba.png"
import phoneLogo from "../../../assets/img/phone.png"
import "./Footer.css"

const Footer = () => {
  return (
    <>
    
      <footer className='footer'>

        <div className='footer-content'>

          <div className='footer-content__about'>
            <h5>Acerca de</h5>
            <p>
              PROCERT, C.A., se constituye en la primera entidad privada dentro de la República Bolivariana de Venezuela, en ser acreditada ante el Estado Venezolano a los fines de Proveer Servicios de Certificación (PSC), conforme a los principios normativos contenidos en la Ley Sobre Mensajes de Datos y Firmas Electrónicas, su Reglamento y la normativa impuesta por la Superintendencia de Servicios de Certificación Electrónica (SUSCERTE).
            </p>
          </div>

          <div className='footer-content__us'>
            <h5>Nosotros</h5>
            <div className='footer-content__us-link'>
              <HashLink to={"/nosotros#mision"}>- Nuestra Misión</HashLink>
              <HashLink to={"/nosotros#vision"}>- Nuestra Visión</HashLink>
              <HashLink to={"/nosotros#valores"}>- Nuestros Valores</HashLink>
              <HashLink to={"/nosotros#hsm"}>- HSM</HashLink>
            </div>  
          </div>

          <div className='footer__RRSS'>
            <div className='footer__RRSS-content'>
              <img src={emailLogo} alt="Email" />
                <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a>
            </div>

            <div className='footer__RRSS-content'>
              <img src={twitterLogo} alt="Twitter" />
              <a href="https://twitter.com/pscprocert" target="_blank" rel="noreferrer">@pscprocert</a>
            </div>

            <div className='footer__RRSS-content'>
              <img src={youtubeLogo} alt="Youtube" />
              <a href="https://www.youtube.com/channel/UCzuleKnDlP_9N74lTmBZOXg" target="_blank" rel="noreferrer">Proveedor De Certificados</a>
            </div>

            <div className='footer__RRSS-content'>
              <img src={phoneLogo} alt="Phone" />
              <p>{"(+58) 212-267-4880"}</p>
            </div>
          </div>

        </div>

        <p className='footer-copyright'>
          Copyright © 2008 Procert RIF J-31635373-7 - Todos los Derechos Reservados
        </p>

      </footer>
    
    </>
  )
}

export default Footer