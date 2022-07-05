import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link"

import LayoutEN from '../../layout/LayoutEN'
import SoporteCard from '../SoportePage/SoporteCard'

import { manualsEN } from '../../../data/documents/manuales'
import { CFE_EN } from '../../../data/certifications/certificados-firma-electronica'
import { securityCerts_EN } from '../../../data/certifications/certificados-seguridad'

import microsoftIcon from "../../../assets/img/microsoft.png"
import linuxIcon from "../../../assets/img/linux.png"
import appleIcon from "../../../assets/img/apple.png"
import browserIcon from "../../../assets/img/globe.png"
import docIcon from "../../../assets/img/docs.png"
import pdfIcon from "../../../assets/img/pdf.png"
import mailIcon from "../../../assets/img/email.png"
import logo2 from "../../../assets/img/logo-2.png"

import "../SoportePage/SoportePage.css"

const SupportPage = () => {
  return (
    <>

      <LayoutEN>

        <section className="support">

          <h1>Support</h1>

          <div className="support-container">

            <div className="support-content">

              <p>PROCERT in order to maintain a high standard of quality and services , it is necessary to declare the list of systems , applications and free or proprietary software that supports safe and reliable use of electronic certificates issued by the PSC PROCERT.</p>

              <p>The PSC PROCERT below lists the support information for which support is provided.</p>

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
                    OP2={"Ubuntu 20.04 onward"}
                    OP3={"CentOS 8 onward"}
                    OP4={"RHEL 8 onward"}
                    OP5={"Canaima 6.0 onward"}
                    OP6={"Fedora 31 onward"}
                    OP7={"Supported desktop environments are for Gnome and KDE."} />

                  <SoporteCard iconURL={appleIcon}
                    alt={"Apple icon"}
                    title={"Apple"}
                    OP1={"MacOs 10.13 High Sierra"}
                    OP2={"MacOS 10.14 Mojave"}
                    OP3={"MacOS 10.15 Catalina"} />

                </div>

                <div className="support-cards__row2">

                  <SoporteCard iconURL={browserIcon}
                    alt={"Browser icon"}
                    title={"Browsers"}
                    OP1={"Microsoft Edge (Recommended for SO Windows)"}
                    OP2={"Mozilla Firefox(Recommended for SO Linux/Mac)"}
                    OP3={"Google Chrome (Recommended for SO Windows 8.1 onward)"}
                    OP4={"Safari 14 (Recommended for Mac)"} />

                  <SoporteCard iconURL={docIcon}
                    alt={"Documents icon"}
                    title={"Office"}
                    OP1={"MS Office onward a Office 2013"}
                    OP2={"LibreOffice onward a 6.0"}
                    OP3={"OpenOffice 4.1 onward"} />

                  <SoporteCard iconURL={pdfIcon}
                    alt={"PDF icon"}
                    title={"PDF Readers"}
                    OP1={"Adobe Reader XI onward"}
                    OP2={"Adobe Acrobat Reader DC"}
                    OP3={"Adobe Reader Profesional XI onward"}
                    OP4={"Nitro PDF 11.0 onward"} />

                </div>

                <div className="support-card__row3">

                  <SoporteCard iconURL={mailIcon}
                    alt={"Email icon"}
                    title={"E-mail Manager"}
                    OP1={"Outlook 2007 onward"}
                    OP2={"Thunderbird 38 onward"}
                    OP3={"Microsoft Entourage 2008 onward"}
                    OP4={"Evolution 3 onward"} />

                </div>

              </div>

            </div>

          </div>


          <div className="support-manuals">

            <h2>AR System User Manuals</h2>

            <div>
              {
                manualsEN.map(manual => (
                  <div id={manual.id}
                    className="manual">
                    <p>{manual.title}</p>
                    <a href={manual.archive}>View Manual</a>
                  </div>
                ))
              }
            </div>

          </div>

          <div className='CTA-tutorials'>

            <img src={logo2} alt="Logo" />
            <Link to={"/en/tutorials"}>Watch our Tutorials</Link>

          </div>

          <div className='requirements'>

            <h2>Requirements for Certificates</h2>

            <p>*To learn the necessary requisites depending on the type of certificate you want to purchase, select the product.</p>

            <div className='requirements__e-sign'>

              <h3>Electronic Signature Certificate</h3>

              <div className='requirements-links'>
                {
                  CFE_EN.map(certification => (
                    <HashLink to={certification.href}
                      key={certification.id}>
                      {certification.title}
                    </HashLink>
                  ))
                }
              </div>

            </div>

            <div className='requirements__security'>

              <h3>Security Certificate</h3>

              <div className='requirements-links'>
                {
                  securityCerts_EN.map(cert => (
                    <HashLink to={cert.href}
                      key={cert.id}>
                      {cert.title}
                    </HashLink>
                  ))
                }
              </div>

            </div>

          </div>

        </section>

      </LayoutEN>

    </>
  )
}

export default SupportPage