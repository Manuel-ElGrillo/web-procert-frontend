import React from 'react'
import { Link } from 'react-router-dom';
import LayoutEN from "../../layout/LayoutEN"
import CTA from "../../CTA/CTA"
import SecundaryNavBar from "../../pages/HomePage/SecundaryNavBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper"
import certificateImg from "../../../assets/img/certificate.png"
import qualityImg from "../../../assets/img/quality.png"
import securityImg from "../../../assets/img/lock.png"
import servicesImg from "../../../assets/img/service.png"
import "swiper/css"
import "swiper/css/navigation"
import "../HomePage/HomePage.css"

const HomePageEN = () => {
  return (
    <>

      <LayoutEN>

        <section className='hero'>

          <div className='main'>
            <h1>PROCERT</h1>
            <p>Specialists on PKI technology, development of IT solutions with intensive use of electronic signatures in the field of business, commerce, public and private management.</p>
          </div>

          <SecundaryNavBar reqHref={"/en/requirements"} 
                           reqText={"Requirements"}
                           certHref={"https://ura.procert.net.ve/pscprocert/cadena.p7b"} 
                           certText={"Certificate root SUSCERTE"}
                           faqHref={"/en/information#faq"} 
                           faqText={"FAQ"}
                           revokedHref={"https://ura.procert.net.ve/lcr/procertca.crl"} 
                           revokedText={"Certificate Revocation List"}
                           tutorialHref={"/en/tutorials"}
                           tutorialText={"Tutorials"}/>

          <div className='prices__container'>

            <div className='prices'>

              <h2>Prices and products</h2>

              <div className='swiper-container'>

                <Swiper className='prices-content'
                  navigation={true}
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}>

                  <SwiperSlide>
                    <div className='prices-content__card'>

                      <div className='prices-content__card-img-container'>
                        <img src={certificateImg} alt="Certificado" />
                      </div>
                      <h3>Digital Certificates</h3>
                      <ul>
                        <li><strong>{"Legal Representative of Public Company"} </strong><span>{"(Consultar)"}</span> - 1 Year</li>
                        <li><strong>{"Legal representative of Private Company"} </strong><span>{"(Consultar)"}</span> - 1 Year</li>
                        <li><strong>{"Public Servant"}</strong> - 1 Year</li>
                        <li><strong>{"Company employee"} </strong> - 1 Year</li>
                        <li><strong>{"University Graduate"} </strong> - 1 Year</li>
                        <li><strong>{"Natural Person"}</strong> - 1 Year</li>
                      </ul>

                      <Link to={"/en/purchases"} className="prices-content__card-link">View more info</Link>

                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='prices-content__card'>
                      <div className='prices-content__card-img-container'>
                        <img src={securityImg} alt="SSL" />
                      </div>
                      <h3>SSL Certificates</h3>
                      <p><strong>Standard SSL:</strong> {"This type of certificate will help him to protect your www.domain.com domain, and during its emission the Wisekey company offers exhaustive procedures of authentication (verification of identity and name of domain). 1 Year"}</p>

                      <CTA text={"Click for more info"}
                        href={"mailto:contacto@procert.net.ve"} />

                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='prices-content__card'>
                      <div className='prices-content__card-img-container'>
                        <img src={qualityImg} alt="Más certificaciones" />
                      </div>
                      <h3>More Certifications</h3>
                      <ul>
                        <li><strong>{"Transaction Signing"}</strong> - 1 Year</li>
                        <li><strong>{"Electronic bill"}</strong> - 1 Year</li>
                        <li><strong>{"Electronic Banking"}</strong> - 1 Year</li>
                      </ul>

                      <Link to={"/en/purchases"} className="prices-content__card-link">View more info</Link>

                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='prices-content__card'>
                      <div className='prices-content__card-img-container'>
                        <img src={servicesImg} alt="Servicios" />
                      </div>
                      <h3>Products</h3>
                      <ul>
                        <li>Gestión Digital</li>
                        <li>One Time Passwords</li>
                        <li>Integrated system for generating electronic vouchers
SIGECE</li>
                        <li>Module of signatures for Android</li>
                        <li>Module of signatures for Desk</li>
                      </ul>

                      <Link to={"/en/services"} className="prices-content__card-link">View more info</Link>

                    </div>
                  </SwiperSlide>

                </Swiper>

              </div>

            </div>
          </div>

          <div className='prices-message'>

            <p>
            Additional to the electronic signatures with legal validity, our certificates have the following additional functions: <br />
              - Secure Email (signature and encryption). <br />
              - Authentication systems with certificates. <br />
              -Login to computers with certificates (if only for E-Token and Smart Card). <br />
              <br />
              <strong>To obtain information on discounts for bulk purchases of certificates, please contact us.</strong>
            </p>
          </div>

        </section>

      </LayoutEN>

    </>
  )
}

export default HomePageEN