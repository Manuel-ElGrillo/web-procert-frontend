import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../layout/Layout"
import OCSP from './OCSP'
import { acLinks } from '../../../data/ac-procert/links'
import "./Enlacespage.css"

const EnlacesPage = () => {

  return (
    <>
    
      <Layout>

        <section className="links">

          <h1>AC Procert</h1>

          <div className="links-content">

            {
              acLinks.map ( link => (
                <div className='links-content__info'
                     key={link.id}>
                  <p>{link.text}</p>
                  <div className='links-content__info-downloads'>
                    <a href={link.btn}>{link.textBtn}</a>
                  </div>
                </div>
              ))
            }

            <div className="links-content__info">
              <p>Certificado de la AC Subordinada PROCERT: A través de los siguientes enlaces podrá realizar la descarga del certificado de la Autoridad de Certificación Subordinada PROCERT.</p>
              <div className="links-content__info-downloads">
                <a href="https://ura.procert.net.ve/pscprocert/Procert.cer">DER</a>
                <a href="https://ura.procert.net.ve/pscprocert/PSCProcert.cer">Base 64</a>
              </div>
            </div>

          </div>

          <OCSP />

          <Link to={"/documentacion"} className="links-related">Revisar Documentación</Link>

        </section>
        
      </Layout>
    
    </>
  )
}

export default EnlacesPage