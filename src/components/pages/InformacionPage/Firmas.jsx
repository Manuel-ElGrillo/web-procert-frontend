import React from 'react'
import CTA from "../../CTA/CTA"
import "./Firmas.css"

const Firmas = () => {
  return (
    <>
    
        <section className="signatures">

            <h2>Firmas</h2>

            <div className='signatures-content'>

                <h3>Servicio  de Firma en Línea</h3>

                <p>El servicio de firma en línea de documentos PDF permitirá de forma exclusiva a los usuarios de PROCERT, firmar electrónicamente desde los Sistemas Operativos (Windows y Linux) con conexión a internet. Obteniendo como resultado el documento .pdf firmado electrónicamente, para cualquier trámite que el usuario requiera.</p>

                <h4>Requisitos previos:</h4>

                <p>Antes de utilizar el servicio de firma en línea, por favor verifique si posee los siguientes componentes:</p>

                <ul>
                    <li>Certificado electrónico adquirido por PROCERT con atributo para Firma de Documentos</li>
                    <li>Debe Poseer el navegador Firefox o Internet Explorer en su computador</li>
                    <li>Drivers de dispositivo e-token instalados en el ordenador {"(si aplica)."}</li>
                    <li>Java Runtime Environment. Si no lo posee instalado en su equipo, puede descargarlo haciendo click <a href="https://www.java.com/es/download/">AQUÍ</a>.</li>
                    <li>PDF Adobe Reader. Si no lo posee instalado en su equipo, puede descargarlo haciendo click <a href="https://get.adobe.com/es/reader/otherversions/">AQUÍ</a>.</li>
                </ul>

                <CTA href={"mailto:contacto@procert.net.ve"}
                     text={"Solicitar"}/>

            </div>

            <div className="signatures-content">

                <h3>Módulo de Firma para Escritorio</h3>

                <p>El módulo de firma para escritorio le permitirá procesar electrónicamente grandes volúmenes de archivos en formato PDF. EL usuario obtendrá todos sus documentos firmados electrónicamente de forma rápida y sencilla para cualquier trámite que el usuario requiera.</p>

                <h4>Costo:</h4>

                <p>Consultanos por correo electrónico.</p>
                <p>*El Módulo de Firma no incluye certificado electrónico.</p>

                <h4>Requerimientos Técnicos:</h4>

                <ul>
                    <li>512 MB de memoria RAM disponibles</li>
                    <li>Certificado electrónico adquirido en PROCERT con atributo para Firma de Documentos</li>
                    <li>Drivers de dispositivo e-token instalados en el ordenador {"(si aplica)"}</li>
                    <li>Java Runtime Environment (Oracle). Si no lo posee instalado en su equipo, puede descargarlo haciendo click <a href="https://www.java.com/es/download/">AQUÍ</a></li>
                    <li>PDF Adobe Reader. Si no lo posee instalado en su equipo, puede descargarlo haciendo click <a href="https://get.adobe.com/es/reader/otherversions/">AQUÍ</a></li>
                </ul>

                <CTA href={"mailto:contacto@procert.net.ve"}
                     text={"Consultar"}/>

            </div>

        </section>

    </>
  )
}

export default Firmas