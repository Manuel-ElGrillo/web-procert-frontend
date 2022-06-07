import React from 'react'
import Layout from "../../layout/Layout"
import CTA from "../../CTA/CTA"
import { Link } from 'react-router-dom'
import gestionDigitalImg from "../../../assets/img/gestion-digital.png"
import otpImg from "../../../assets/img/otp.jpg"
import sigeceImg from "../../../assets/img/sigece.png"
import firmaAndroidImg from "../../../assets/img/firma-android.png"
import firmaQRImg from "../../../assets/img/firma.png"
import firmasEscritorioVideo from "../../../assets/video/modulo-de-firma-electronica.mp4"
import facialImg from "../../../assets/img/facial.jpg"
import "./ServiciosPage.css"

const ServiciosPage = () => {
  
  return (
    <>
    
      <Layout>
        <section className='products'>

          <h1>Servicios</h1>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <div>
                  <h3>Gestión Digital</h3>
                  <p>Los documentos y facturas electrónicas con certificados electrónicos emitidos por PROCERT te presenta una variedad de beneficios.</p>
                  <p>Para más información acerca de nuestros servicios y productos, no dudes en cantactarnos.</p>
                </div>
                <img src={gestionDigitalImg} alt="Gestión digital" />
              </div>
            </div>
          </div>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <img src={otpImg} alt="OTP" />
                <div>
                  <h3>One Time Password</h3>
                  <p>Es una solución de autenticación que tiene como finalidad fortalecer y blindar el acceso a sistemas de información con una contraseña única y aleatoria que es enviada a través de correo electrónico y servicio de mensajes cortos (SMS).
                    Su tiempo de vencimiento es parametrizable,puede ser implementado en aplicaciones web sin depender del lenguaje de programación y se instala en cualquier infraestructura tecnológica sin impactar la operatividad de los sistemas.</p>
                    <p>
                    Incluye la contratación de un integrador para establecer la comunicación con las operadoras telefónicas y requiere JRE 8.
                    </p>
                </div>
              </div>

            </div>
          </div>
  
          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <div>
                  <h3>Sistema Integrado de Generación de Comprobantes Electrónicos</h3>
                  <p>Es una aplicación Web, utilizada como herramienta en la gestión administrativa y tributaria que permite gestionar y enviar en tiempo real las facturas y demas comprobantes electrónicos generados</p>
                  <Link to={"/documentacion"}>Descargue nuestro archivo PDF para más información</Link>
                </div>
                <img src={sigeceImg} alt="SIGECE" />
              </div>
            </div>
          </div>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <img src={firmaAndroidImg} alt="Firma Android" />
                <div>
                  <h3>Módulo de firma para Android</h3>
                  <p>Es una aplicación que permite a cualquier persona, empresa o entidad gubernamental que tenga un certificado electrónico de Procert, firmar electrónicamente un documento electrónico en formato .pdf.</p>
                  <p>Escanea el código QR y descarga la aplicación.</p>
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
              <h3>Módulo de firmas para escritorio</h3>
              <p>Es una aplicación que se instala en el equipo del cliente para firmar uno o varios documentos en formato PDF de manera simultánea.</p>
              <p>Esta aplicacion ofrece las siguientes ventajas:</p>
              <p>
                ° Economizar recursos materiales y financieros utilizados en la impresión y envío de documentos. <br />
                ° Ahorro de tiempo valioso. <br />
                °Optimizar tareas.
              </p>
              <video src={firmasEscritorioVideo}
                     controls
                     muted>
              </video>
            </div>
          </div>

          <div className='products-container'>
            <div className='products-content'>
              <div className='products-grid'>
                <div>
                  <h3>Firma en línea certificada</h3>
                  <p>El sistema ofrece:</p>
                  <p>° Validación de Identidad. <br />
                    ° KYC, AML y PEP. <br />
                    ° Firma electrónica en línea de archivos .PDF. <br />
                    ° Estampado de tiempo. <br />
                    ° Autenticación de doble factor con OTP. <br />
                    ° Registro biométrico. <br />
                    ° Geolocalizacion.</p>
                  <p>
                  El servicio permite ofrecer firmas en línea con valor legal. Cumple con las previsiones legales contenidas en la Ley Sobre Mensajes de Datos, La Ley Especial Contra Delitos Informáticos, La Ley de Infogobierno y otras leyes relacionadas. Igualmente cumple con las normas emanadas del SENIAT, la SUDEBAN y la SUDEASEG.
                  </p>
                </div>
                <img src={facialImg} alt="Facial" />
              </div>
            </div>
          </div>

          <div>
            <CTA text="Contáctanos"
                 href="mailto:contacto@procert.net.ve"/>
          </div>

        </section>
      </Layout>
    
    </>
  )
}

export default ServiciosPage