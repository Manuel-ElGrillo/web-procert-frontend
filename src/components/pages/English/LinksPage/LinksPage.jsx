import React from 'react'
import { Link } from 'react-router-dom'

import LayoutEN from "../../../layout/LayoutEN"
import OCSPEN from './OCSP-EN'
import { acLinksEN } from "../../../../data/ac-procert/links"

import "../../EnlacesPage/Enlacespage.css"

const LinksPage = () => {
  return (
      <>

          <LayoutEN>

              <section className="links">

                  <h1>Procert CA</h1>

                  <div className="links-content">

                      {
                          acLinksEN.map(link => (
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

                  <OCSPEN />

                  <Link to={"/en/documentation"} className="links-related">Check Documentation</Link>

              </section>

          </LayoutEN>

      </>
  )
}

export default LinksPage