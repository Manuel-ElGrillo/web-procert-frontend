import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../layout/Layout"
import CTA from '../../CTA/CTA'
import "./ComprasPage.css"

const ComprasPage = () => {

  return (
    <>
    
      <Layout>
        
        <section className="purchases">

          <h1>Compra de Certificados</h1>

          <div className='CTA-AR'>
            <Link to={"/sistemaAR"}>Ingresar al Sistema AR</Link>
          </div>

          <h2>Pasos para la solicitud de un Certificado Electrónico</h2>

          <div className="purchases-content">

            <h3>Certificado de Firma Electrónica</h3>

            <ol>

              <li>Solicite su presupuesto enviando un correo electrónico a: <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a></li>

              <li>Deposite directamente en nuestras cuentas bancarias {"(contáctenos por correo para conocer los números de cuenta)"}</li>

              <li>Envíe los requisitos según el tipo de certificado a solicitar (<Link to="/requisitos">ver requisitos</Link>) a nuestras oficinas o envíelo en formato digital a nuestro correo electrónico: <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a>. Es de carácter obligatorio que se consignen todos los requisitos solicitados, debido a que es un requerimiento establecido en la Legislación Venezolana sin los mismos no es posible realizar la emisión de los Certificados Electrónicos</li>

              <li>En un lapso no mayor a 3 días hábiles le contactaremos para acordar el lugar, fecha y hora para la validación presencial de su identidad y de los datos a certificar</li>

              <li>Ingrese a nuestro <a href="https://ura.procert.net.ve/ura/user/Logon.aspx">Sistema de Certificación</a> con su usuario y contraseña (previamente suministrado por nosotros), verifique la información contenida en el formulario y presione click en el botón Generar</li>

              <p><strong>Nota:</strong> Para el proceso de generación del par de claves criptográficas (Paso 5), debe utilizar el navegador Microsoft Internet Explorer en caso de S.O. Windows, para distribuciones basadas en Linux, debe utilizar el navegador Mozilla Firefox, de lo contrario, su petición no será procesada por PROCERT.</p>

              <li>En un lapso no mayor a 5 días hábiles recibirá por correo electrónico su certificado digital</li>

            </ol>

            <CTA text={"Ingresar al Sistema de Certificación"}
                 href={"https://ura.procert.net.ve/ura/user/Logon.aspx"}/>

          </div>

          <div className="purchases-content">

            <h3>Certificado para Servidor Seguro SSL (Certificados Internacionales)</h3>

            <ol>

              <li>Solicite su presupuesto enviando un correo electrónico a: <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a></li>

              <li>Deposite directamente en nuestras cuentas bancarias (contáctenos por correo para conocer los números de cuenta)</li>

              <li>Envíe a nuestro correo electrónico o a nuestras oficinas los siguientes recaudos:</li>

              <ul>

                <li>Request o Archivo CSR generado desde el Servidor Web donde se va a instalar el certificado electrónico</li>

                <li>Copia del documento constitutivo de la empresa</li>

                <li>Copia del RIF</li>

                <li>Copia de la última designación de las autoridades</li>

              </ul>

              <p><strong>Nota:</strong> Durante la validación del dominio, es posible que nuestro partner (Thawthe, Digicert o Wisekey) solicite documentación adicional.</p>

              <li>En un lapso no mayor a 3 días hábiles luego de recibida toda la documentación y el pago correspondiente, usted recibirá un correo electrónico con su certificado electrónico</li>

            </ol>

          </div>

          <h2>Precios</h2>

          <div className="purchases-prices">

            <h3>Certificados</h3>

            <ul>

              <li><span>Representante Legal de Empresa Privada</span> - 1 año de duración {"(Consultar Precio)"}</li>

              <p>El certificado digital de Representante Legal de Empresa Privada es emitido a favor de una persona física representante de una determinada empresa. El titular del certificado se identifica no únicamente como persona física perteneciente a una empresa privada, sino que añade su cualificación como representante legal o apoderado general de la misma.</p>

              <li><span>Representante Legal de Empresa Pública</span> - 1 año de duración {"(Consultar Precio)"}</li>

              <p>El certificado digital de Representante Legal de Empresa Pública es emitido a favor de una persona física representante de un determinado ente público u organismo gubernamental. El titular del certificado se identifica no únicamente como persona física perteneciente a una empresa pública, sino que añade su cualificación como representante legal o apoderado general de la misma.</p>

              <li><span>Funcionario Público</span> - 1 año de duración {"($60 + IVA)"}</li>

              <li><span>Empleado de Empresa</span> - 1 año de duración {"($60 + IVA)"}</li>

              <p>El certificado digital de Empleado de Empresa garantiza la identidad de la persona física titular del certificado, así como su vinculación a una determinada empresa, ente público u organismo gubernamental en virtud del cargo que ocupa. Este certificado no otorgará por si mismo mayores facultades a su titular que las que posee por el desempeño de su actividad habitual.</p>

              <li><span>Profesional Titulado</span> - 1 año de duración {"($60 + IVA)"}</li>

              <p>El certificado digital de Profesional Titulado garantiza la identidad de la persona física titular del certificado, así como que una determinada persona natural afirma haber obtenido un título profesional debidamente reconocido en la República de Bolivariana de Venezuela o en un país Extranjero y que ha obtenido el correspondiente registro, licencia, colegiatura o tarjeta profesional requerido para el ejercicio de su profesión.</p>

              <li><span>Persona Natural</span> - 1 año de duración {"($60 + IVA)"}</li>

              <p>El certificado digital de Persona Natural garantiza la identidad de la persona física titular del certificado. Este certificado no otorgará por si mismo mayores facultades a su titular.</p>

              <li><span>Certificado Standard SSL</span> - 1 año de duración {"(Consultar Precio)"}</li>

              <p>Este tipo de certificado le ayudará a proteger su dominio www.dominio.com, y durante su emisión la empresa Wisekey ofrece procedimientos exhaustivos de autenticación (verificación de identidad y nombre de dominio)</p>

              <li><span>Firma de Transacción</span> - 1 año de duración {"(Consultar Precio)"}</li>

              <p>Los Certificados de Firma de Transacción avalan la integridad y el no repudio de las transacciones electrónicas realizadas por personas naturales o jurídicas y del dato contenido en cada transacción. PROCERT cuenta con desarrollos modulares que pueden ser integrados a los sistemas y aplicaciones de los clientes y que permiten firmar de forma automática las transacciones realizadas en los distintos entornos de operación, contemplando la firma de varios tipos de archivo (.jpg, .pdf, .txt, .tif, etc) y direccionarlos luego al destino asignado por el cliente.
                EL costo asignado al servicio del módulo de certificado de transacción electrónica y del módulo de firma de factura electrónica es de Bs. 0,15,00, por cada transacción firmada. El certificado de transacción se encuentra asociados a un módulo que es integrado a los sistemas del usuario. El costo de integración es por separado y previa cotización.</p>

              <li><span>Factura Electrónica</span> - 1 año de duración {"(Consultar Precio)"}</li>

              <p>Los Certificados de Factura Electrónica avalan la integridad y el no repudio de los comprantes emitidos conforme a las normas legales y administrativas vigentes en formato electrónico y derivadas de las transacciones electrónicas o no electrónicas realizadas por personas naturales o jurídicas, públicas o privadas y del dato contenido en cada transacción. PROCERT cuenta con un desarrollo modular que pueden ser integrados a los sistemas y software contable de los clientes y que permiten firmar de forma automática las facturas generadas por dichos sistemas, otorgando al archivo electrónico que debe cumplir los requisitos legales y formales de la factura, la prueba legal de conformidad con lo establecido en el Decreto Ley Sobre Mensajes de Datos y Formas Electrónicas.</p>

              <li><span>Banca Electrónica</span> - 1 año de duración {"(Consultar Precio)"}</li>

              <p>El Certificado de Banca Electrónica permitirá al usuario realizar autenticación de doble factor en la página web del banco, firmar transacciones, establecer la autoría de su transacción y ofrecerá el no repudio, permitiendo de esa manera asegurar las transacciones electrónicas del Sistema Bancario, previniendo el Phishing (Ingeniería Social) y minimizando la potencialidad de fraudes electrónicos. Lo anterior da cumplimiento a la normativa SUDEBAN para Banca en Línea, la Ley para la Defensa de las Personas en el Acceso a los Bienes y Servicios y la Ley Sobre Mensaje de Datos y Firmas Electrónicas.</p>

            </ul>

            <CTA href={"mailto:contacto@procert.net.ve"}
                 text={"Consultar Precios"}/>

          </div>

          

        </section>

      </Layout>
    
    </>
  )
}

export default ComprasPage