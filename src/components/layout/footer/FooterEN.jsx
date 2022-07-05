import React from 'react'
import { HashLink } from 'react-router-hash-link'
import youtubeLogo from "../../../assets/img/youtube.png"
import twitterLogo from "../../../assets/img/twitter.png"
import emailLogo from "../../../assets/img/arroba.png"
import phoneLogo from "../../../assets/img/phone.png"
import "./Footer.css"

const FooterEN = () => {
  return (
    <>
    
      <footer className='footer'>

        <div className='footer-content'>

          <div className='footer-content__about'>
            <h5>Company</h5>
            <p>
            PROCERT, CA, is the first private entity within the Bolivarian Republic of Venezuela, to be accredited before the Venezuelan State for the purpose of Providing Certification Services (PSC), in accordance with the normative principles contained in the Law on Messages of Data and Electronic Signatures, its Regulations and the regulations imposed by the Superintendence of Electronic Certification Services (SUSCERTE).
            </p>
          </div>

          <div className='footer-content__us'>
            <h5>About us</h5>
            <div className='footer-content__us-link'>
              <HashLink to={"/en/us#mission"}>- Our Mission</HashLink>
              <HashLink to={"/en/us#vision"}>- Our Vision</HashLink>
              <HashLink to={"/en/us#values"}>- Our Values</HashLink>
              <HashLink to={"/en/us#hsm"}>- HSM</HashLink>
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
          Copyright © 2008 Procert RIF J-31635373-7 - All rights reserved
        </p>

      </footer>
    
    </>
  )
}

export default FooterEN