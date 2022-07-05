import React from 'react'
import LayoutEN from '../../layout/LayoutEN'
import CTA from "../../CTA/CTA"
import otpImg from "../../../assets/img/otp.jpg"
import sigeceImg from "../../../assets/img/sigecetlf2.png"
import signaturesAndroid from "../../../assets/img/sigece.png"
import firmaQRImg from "../../../assets/img/firma.png"
import firmasEscritorioVideo from "../../../assets/video/modulo-de-firma-electronica.mp4"
import "../../pages/ServiciosPage/ServiciosPage.css"

const ServicesPage = () => {
  return (
    <>

      <LayoutEN>

        <section className='products'>

          <h1>Services</h1>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <img src={otpImg} alt="OTP" />
                <div>
                  <h3>One Time Password</h3>
                  <p>It is an authentication solution whose purpose is to strengthen and shield access to information systems with a unique and random password that is sent via email and short message service (SMS).
                    Its expiration time is parametrizable, it can be implemented in web applications without depending on the programming language and it is installed in any technological infrastructure without impact on the operation of the systems.</p>
                  <p>
                    Includes the hiring of an integrator to establish communication with telephone operators and requires JRE 8.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <div>
                  <h3>SIGECE</h3>
                  <p>It is a Web application, used as a tool in administrative and tax management under the electronic government scheme promoted by the national executive.
                  </p>
                  <p>
                    SIGECE is interoperable and allows you to manage and send invoices and other electronic vouchers generated in real time.</p>
                  <p>SIGECE comply with the orders issued by SENIAT, the electronic format does not need to be printed, as it has an electronic signature issued by a Certification Services Provider accredited to the Venezuelan </p>
                  
                </div>
                <img src={sigeceImg} alt="SIGECE" />
              </div>
            </div>
          </div>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <img src={signaturesAndroid} alt="Firma Android" />
                <div>
                  <h3>Module of Signatures for Android</h3>
                  <p>It is an application that allows any person, company or government entity that has an electronic certificate of Procert, to electronically sign an electronic document in .pdf format..</p>
                  <p>Scan the QR code and download the application.</p>
                  <div className='qr'>
                    <img src={firmaQRImg} alt="Firma QR" />
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>

          <div className='products-container'>
            <div className="products-content">
              <h3>Module of Signatures for Desk</h3>
              <p>It is an application that is installed on the client's computer to sign one or several documents in PDF format simultaneously.</p>
              <p>This application offers the following advantages:</p>
              <p>
                ° Economize material and financial resources used in printing and sending documents <br />
                ° Saving valuable time <br />
                ° Optimizing tasks
              </p>
              <video src={firmasEscritorioVideo}
                controls
                muted>
              </video>
            </div>
          </div>

          
          <div>
            <CTA text="Contact"
              href="mailto:contacto@procert.net.ve" />
          </div>

        </section>

      </LayoutEN>

    </>
  )
}

export default ServicesPage