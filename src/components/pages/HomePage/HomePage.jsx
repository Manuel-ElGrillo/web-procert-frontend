import React from 'react'
import Layout from "../../layout/Layout"
import CTA from "../../CTA/CTA"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper"
import priceImg from "../../../assets/img/dollar.png"
import securityImg from "../../../assets/img/lock.png"
import servicesImg from "../../../assets/img/service.png"
import productsImg from "../../../assets/img/product.png"
import "swiper/css"
import "swiper/css/navigation"
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

          <div className='prices__container'>

            <div className='prices'>

              <h2>Nuestros Precios y Productos</h2>

              <div className='swiper-container'>

                <Swiper className='prices-content'
                        navigation={true}
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1}>

                  <SwiperSlide>
                    <div className='prices-content__card'>
                      
                        <div className='prices-content__card-img-container'>
                          <img src={priceImg} alt="Precios" />
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis sit repellat esse accusamus assumenda! Porro laborum officiis assumenda ratione iste. Eligendi ad minus hic id adipisci quaerat laborum blanditiis.{"Descripción pendiente"} - Servicios con duración de 1 año c/u.</p>
                        <ul>
                          <li><strong>{"Representante Legal de Empresa Privada"} </strong><span>{"(Bs 1000)"}</span></li>
                          <li><strong>{"Representante Legal de Empresa Pública"} </strong><span>{"(Bs 1000)"}</span></li>
                          <li><strong>{"Funcionario Público"}</strong> <span>{"(Bs 1000)"}</span></li>
                          <li><strong>{"Empleado de Empresa"} </strong> <span>{"(Bs 1000)"}</span></li>
                          <li><strong>{"Profesional Titulado"} </strong> <span>{"(Bs 1000)"}</span></li>
                          <li><strong>{"Persona Natural"}</strong> <span>{"(Bs 1000)"}</span></li>
                        </ul>

                        <CTA text={"Pedir más Información"}
                             href={"mailto:contacto@procert.net.ve"}/>
                      
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                  <div className='prices-content__card'>
                    <div className='prices-content__card-img-container'>
                      <img src={securityImg} alt="SSL" />
                    </div>
                      <h3>Certificados SSL</h3>
                      <p><strong>Standard SSL:</strong> {"Este tipo de certificado le ayudará a proteger su dominio www.su-dominio.com, y durante su emisión la empresa Wisekey ofrece procedimientos exhaustivos de autenticación (verificación de identidad y nombre de dominio). (Bs 1000) - Servicio con duración de 1 año."}</p>

                      <CTA text={"Pedir más Información"}
                           href={"mailto:contacto@procert.net.ve"}/>

                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className='prices-content__card'>
                      <div className='prices-content__card-img-container'>
                        <img src={productsImg} alt="Productos" />
                      </div>
                      <h3>Lorem Ipsum</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis sit repellat esse accusamus assumenda! Porro laborum officiis assumenda ratione iste. Eligendi ad minus hic id adipisci quaerat laborum blanditiis.{"Descripción pendiente"} - Servicios con duración de 1 año c/u.</p>
                      <ul>
                        <li><strong>{"Firma de Transacción"}</strong> <span>{"(Bs 1000)"}</span></li>
                        <li><strong>{"Factura Electrónica"}</strong> <span>{"(Bs 1000)"}</span></li>
                        <li><strong>{"Banca Electrónica"}</strong> <span>{"(Bs 1000)"}</span></li>
                      </ul>

                      <CTA text={"Pedir más Información"}
                           href={"mailto:contacto@procert.net.ve"}/>

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

                      <CTA text={"Pedir más Información"}
                           href={"mailto:contacto@procert.net.ve"}/>

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