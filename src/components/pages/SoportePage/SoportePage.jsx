import React from 'react'
import { Link } from 'react-router-dom'

import Layout from "../../layout/Layout"
import SoporteCard from './SoporteCard'

import { manuals } from '../../../data/documents/manuales'
import { CFE } from '../../../data/certifications/certificados-firma-electronica'
import { securityCerts } from '../../../data/certifications/certificados-seguridad'

import microsoftIcon from "../../../assets/img/microsoft.png"
import linuxIcon from "../../../assets/img/linux.png"
import appleIcon from "../../../assets/img/apple.png"
import browserIcon from "../../../assets/img/browser.png"
import docIcon from "../../../assets/img/documents.png"
import pdfIcon from "../../../assets/img/pdf.png"
import mailIcon from "../../../assets/img/email-2.png"
import logo2 from "../../../assets/img/logo-2.png"

import "./SoportePage.css"

const SoportePage = () => {
  
  return (
    <>
    
      <Layout>

        <section className="support">

          <h1>Soporte</h1>

          <div className="support-container">

            <div className="support-content">

              <p>PROCERT con el fin de mantener un alto estándar de calidad y servicios, procede a declarar el listado de sistemas, aplicativos y software libre o propietario que soporta de manera segura y confiable el uso de certificados electrónicos emitidos por el PSC PROCERT.</p>

              <p>El PSC PROCERT a continuación lista la información de soporte técnico a los cuales se brinda soporte.</p>

              <div className='support-cards'>

                <div className="support-cards__row1">

                  <SoporteCard iconURL={microsoftIcon}
                    alt={"Microsoft icon"}
                    title={"Microsoft"}
                    OP1={"Windows 8.1"}
                    OP2={"Windows 10"}
                    OP3={"Windows 11"}
                    OP4={"Windows Server 2012 R2"}
                    OP5={"Windows Server 2016"}
                    OP6={"Windows Server 2019"} />

                  <SoporteCard iconURL={linuxIcon}
                    alt={"Linux icon"}
                    title={"Linux"}
                    OP1={"Debian 10"}
                    OP2={"Ubuntu 20.04 o Superiores"}
                    OP3={"CentOS 8 o Superiores"}
                    OP4={"RHEL 8 o Superiores"}
                    OP5={"Canaima 6.0 o Superiores"}
                    OP6={"Fedora 31 o Superiores"}
                    OP7={"Todos con ambiente gráfico Gnome o KDE"} />

                  <SoporteCard iconURL={appleIcon}
                    alt={"Apple icon"}
                    title={"Apple"}
                    OP1={"MacOs 10.13 High Sierra"}
                    OP2={"MacOS 10.14 Mojave"}
                    OP3={"MacOS 10.15 Catalina (en adelante)"} />

                </div>

                <div className="support-cards__row2">

                  <SoporteCard iconURL={browserIcon}
                    alt={"Browser icon"}
                    title={"Navegadores"}
                    OP1={"Microsoft Edge (Recomendado para SO Windows)"}
                    OP2={"Mozilla Firefox(Recomendado para SO Linux/Mac)"}
                    OP3={"Google Chrome (Recomendado para SO Windows 8.1 o superiores)"}
                    OP4={"Safari 14 (Recomendado para Mac)"} />

                  <SoporteCard iconURL={docIcon}
                    alt={"Documents icon"}
                    title={"Ofimática"}
                    OP1={"MS Office superior a Office 2013"}
                    OP2={"LibreOffice superior a 6.0"}
                    OP3={"OpenOffice 4.1 y Superiores"} />

                  <SoporteCard iconURL={pdfIcon}
                    alt={"PDF icon"}
                    title={"Lectores de PDF"}
                    OP1={"Adobe Reader XI o Superiores"}
                    OP2={"Adobe Acrobat Reader DC"}
                    OP3={"Adobe Reader Profesional XI o superiores"}
                    OP4={"Nitro PDF 11.0 o superiores"} />

                </div>

                <div className="support-card__row3">

                  <SoporteCard iconURL={mailIcon}
                    alt={"Email icon"}
                    title={"Gestores de correo"}
                    OP1={"Outlook 2013 o superiores"}
                    OP2={"Thunderbird 38 o superiores"}
                    OP3={"Microsoft Entourage 2008 o superiores"}
                    OP4={"Evolution 3 o superiores"} />
       
                </div>

              </div>

            </div>

          </div>


          <div className="support-manuals">

            <h2>Manuales de uso del Sistema AR</h2>

            <div>
              {
                manuals.map ( manual => (
                  <div id={manual.id}
                       className="manual">
                    <p>{manual.title}</p>
                    <a href={manual.archive}>Ver Manual</a>
                  </div>
                ))
              }
            </div>

          </div>

          <div className='CTA-tutorials'>

              <img src={logo2} alt="Logo" />
              <Link to={"/tutoriales"}>Observa nuestros tutoriales</Link>

          </div>

          <div className='requirements'>

            <h2>Requisitos para Certificados</h2>

            <p>*Si desea conocer los recaudos necesarios según el tipo de certificado que desea adquirir, seleccione el producto.</p>

            <div className='requirements__e-sign'>

              <h3>Certificados de Firma Electrónica</h3>

              <div className='requirements-links'>
                {
                  CFE.map ( certification => (
                    <Link to={certification.href} 
                          key={certification.id}>
                            {certification.title}
                    </Link>
                  ))
                }
              </div>

            </div>

            <div className='requirements__security'>

              <h3>Certificados de Seguridad</h3>

              <div className='requirements-links'>
                {
                  securityCerts.map ( cert => (
                    <Link to={cert.href}
                          key={cert.id}>
                            {cert.title}
                    </Link>
                  ))
                }
              </div>

            </div>

          </div>

        </section>
     
      </Layout>
    
    </>
  )
}

export default SoportePage