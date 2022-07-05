import React from 'react'
import { Link } from 'react-router-dom';
import Layout from "../../layout/Layout"
import CTA from "../../CTA/CTA"
import SecundaryNavBar from './SecundaryNavBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper"
import certificateImg from "../../../assets/img/certificate.png"
import qualityImg from "../../../assets/img/quality.png"
import securityImg from "../../../assets/img/lock.png"
import servicesImg from "../../../assets/img/service.png"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./HomePage.css"

const HomePage = () => {
  return (
    <>

      <Layout>

        <section className='hero'>

          <div className='main'>
            <h1>PROCERT</h1>
            <p>Especialistas en el campo de la tecnología PKI, desarrollo de soluciones informáticas con uso intensivo de la firma electrónica en el ámbito de negocio, comercio, gestión pública y privada.</p>
          </div>

          <SecundaryNavBar reqHref={"/requisitos"} 
                           reqText={"Requisitos"}
                           certHref={"https://ura.procert.net.ve/pscprocert/cadena.p7b"} 
                           certText={"Certificado Raíz SUSCERT"}
                           faqHref={"/informacion#faq"} 
                           faqText={"FAQ"}
                           revokedHref={"https://ura.procert.net.ve/lcr/procertca.crl"} 
                           revokedText={"Lista de Certificados Revocados"}
                           tutorialHref={"/tutoriales"}
                           tutorialText={"Tutoriales"} />

          <div className='prices__container'>

            <div className='prices'>

              <h2>Nuestros Precios y Productos</h2>

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
                        <h3>Certificados Digitales</h3>
                        <ul>
                          <li><strong>{"Representante Legal de Empresa Privada"} </strong><span>{"(Consultar)"}</span> - 1 año de duración</li>
                          <li><strong>{"Representante Legal de Empresa Pública"} </strong><span>{"(Consultar)"}</span> - 1 año de duración</li>
                          <li><strong>{"Funcionario Público"}</strong> <span>{"($60 + IVA)"}</span> - 1 año de duración</li>
                          <li><strong>{"Empleado de Empresa"} </strong> <span>{"($60 + IVA)"}</span> - 1 año de duración</li>
                          <li><strong>{"Profesional Titulado"} </strong> <span>{"($60 + IVA)"}</span> - 1 año de duración</li>
                          <li><strong>{"Persona Natural"}</strong> <span>{"($60 + IVA)"}</span> - 1 año de duración</li>
                        </ul>

                        <Link to={"/compras"} className="prices-content__card-link">Ver más Información</Link>
                      
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className='prices-content__card'>
                    <div className='prices-content__card-img-container'>
                      <img src={securityImg} alt="SSL" />
                    </div>
                      <h3>Certificados SSL</h3>
                      <p><strong>Standard SSL:</strong> {"Este tipo de certificado le ayudará a proteger su dominio www.su-dominio.com, y durante su emisión la empresa Wisekey ofrece procedimientos exhaustivos de autenticación (verificación de identidad y nombre de dominio). (Consultar precio) - Servicio con duración de 1 año."}</p>

                      <CTA text={"Consultar Información"}
                           href={"mailto:contacto@procert.net.ve"}/>

                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='prices-content__card'>
                      <div className='prices-content__card-img-container'>
                        <img src={qualityImg} alt="Más certificaciones" />
                      </div>
                      <h3>Más Certificaciones</h3>
                      <ul>
                        <li><strong>{"Firma de Transacción"}</strong> <span>{"(Consultar)"}</span> - 1 año de duración</li>
                        <li><strong>{"Factura Electrónica"}</strong> <span>{"(Consultar)"}</span> - 1 año de duración</li>
                        <li><strong>{"Banca Electrónica"}</strong> <span>{"(Consultar)"}</span> - 1 año de duración</li>
                      </ul>

                      <Link to={"/compras"} className="prices-content__card-link">Ver más Información</Link>

                    </div>
                  </SwiperSlide>                

                  <SwiperSlide>
                    <div className='prices-content__card'>
                    <div className='prices-content__card-img-container'>
                        <img src={servicesImg} alt="Servicios" />
                      </div>
                      <h3>Productos</h3>
                      <ul>
                        <li>Gestión Digital</li>
                        <li>One Time Passwords</li>
                        <li>Sistema integrado de generación de comprobantes electrónicos</li>
                        <li>Módulo de firma para Android</li>
                        <li>Módulo de firma para Escritorio</li>
                        <li>Firma en línea certificada</li>
                      </ul>

                      <Link to={"/servicios"} className="prices-content__card-link">Ver más Información</Link>

                    </div>
                  </SwiperSlide>

                </Swiper>

              </div>

            </div>
          </div>

          <div className='prices-message'>
            <p>
             <strong>*Motivado a la aplicación de la tasa oficial publicada por el Banco Central de Venezuela, la cual está sustentada en resolución gubernamental, nos vemos en la obligación del aumento del Certificado Electrónico.</strong> 
            </p>

            <p>
              Adicional a la firma electrónica con validez legal, nuestros certificados cuentan con las siguientes funciones adicionales: <br />
              - Correo electrónico seguro (Firma y Cifrado). <br />
              - Autenticación a sistemas con certificados. <br />
              - Inicio de sesión a equipos con certificados (solo para el caso de E-Token y Smart Card). <br />
              <br />
              <strong>Si desea obtener información sobre los descuentos por compras masivas de certificados, no dude en contactarnos.</strong>
            </p>
          </div>

        </section>

      </Layout>

    </>
  )
}

export default HomePage