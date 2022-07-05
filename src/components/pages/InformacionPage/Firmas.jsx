import React from 'react'
import { useState } from 'react'
import FirmasReq from './FirmasReq'
import "./Firmas.css"

const Firmas = () => {

    const [sign1, setSing1] = useState(false)
    const [sign2, setSign2] = useState(false)

    const handleSign1 = () => {
        setSing1(!sign1)
    }

    const handleSign2 = () => {
        setSign2(!sign2)
    }

    const servicioFirmaEnLinea = {
        description: "El servicio de firma en línea de documentos PDF permitirá de forma exclusiva a los usuarios de PROCERT, firmar electrónicamente desde los Sistemas Operativos (Windows y Linux) con conexión a internet. Obteniendo como resultado el documento .pdf firmado electrónicamente, para cualquier trámite que el usuario requiera.",

        requirement: "Requisitos Previos",

        requirementText: "Antes de utilizar el servicio de firma en línea, por favor verifique si posee los siguientes componentes:",

        req1: "Certificado electrónico adquirido por PROCERT con atributo para Firma de Documentos",

        req2: "Debe Poseer el navegador Firefox o Internet Explorer en su computador",

        req3: "Drivers de dispositivo e-token instalados en el ordenador (si aplica)",

        req4: "Java Runtime Environment. Si no lo posee instalado en su equipo, puede descargarlo haciendo click",

        req5: "PDF Adobe Reader. Si no lo posee instalado en su equipo, puede descargarlo haciendo click",

        downloadLink1: "https://www.java.com/es/download/",

        downloadLink2: "https://get.adobe.com/es/reader/otherversions/",

        downloadTextLang: "AQUÍ",

        CTAText: "Solicitar",

        CTAHref: "mailto:contacto@procert.net.ve",

    }

    const moduloFirmaEscritorio = {
        description: "El módulo de firma para escritorio le permitirá procesar electrónicamente grandes volúmenes de archivos en formato PDF. EL usuario obtendrá todos sus documentos firmados electrónicamente de forma rápida y sencilla para cualquier trámite que el usuario requiera.",

        cost: "Costo",

        costText: "Consultanos por correo electrónico (El Módulo de Firma no incluye certificado electrónico)",

        requirement: "Requerimientos Técnicos",

        req1: "512 MB de memoria RAM disponibles",

        req2: "Certificado electrónico adquirido en PROCERT con atributo para Firma de Documentos",

        req3: "Drivers de dispositivo e-token instalados en el ordenador (si aplica)",

        req4: "Java Runtime Environment (Oracle). Si no lo posee instalado en su equipo, puede descargarlo haciendo click",

        req5: "PDF Adobe Reader. Si no lo posee instalado en su equipo, puede descargarlo haciendo click",

        downloadLink1: "https://www.java.com/es/download/",

        downloadLink2: "https://get.adobe.com/es/reader/otherversions/",

        CTAText: "Consultar",

        CTAHref: "mailto:contacto@procert.net.ve"

    }

  return (
    <>
    
        <section className="signatures">

            <h2>Firmas</h2>

            <div className='signatures-content'>

                <h3 onClick={handleSign1}>Servicio  de Firma en Línea</h3>

                {
                    sign1 ? 
                        <FirmasReq description={servicioFirmaEnLinea.description}
                                   requirement={servicioFirmaEnLinea.requirement}
                                   requirementText={servicioFirmaEnLinea.requirementText}
                                   req1={servicioFirmaEnLinea.req1}
                                   req2={servicioFirmaEnLinea.req2}
                                   req3={servicioFirmaEnLinea.req3}
                                   req4={servicioFirmaEnLinea.req4}
                                   req5={servicioFirmaEnLinea.req5}
                                   downloadLink1={servicioFirmaEnLinea.downloadLink1}
                                   downloadLink2={servicioFirmaEnLinea.downloadLink2}
                                   downloadTextLang={servicioFirmaEnLinea.downloadTextLang}
                                   CTAText={servicioFirmaEnLinea.CTAText}
                                   CTAHref={servicioFirmaEnLinea.CTAHref}/> :
                    null
                }

                

                

            </div>

            <div className="signatures-content">

                <h3 onClick={handleSign2}>Módulo de Firma para Escritorio</h3>

                {
                    sign2 ?
                        <FirmasReq description={moduloFirmaEscritorio.description}
                                   cost={moduloFirmaEscritorio.cost}
                                   costText={moduloFirmaEscritorio.costText}
                                   requirement={moduloFirmaEscritorio.requirement}
                                   requirementText={moduloFirmaEscritorio.requirementText}
                                   req1={moduloFirmaEscritorio.req1}
                                   req2={moduloFirmaEscritorio.req2}
                                   req3={moduloFirmaEscritorio.req3}
                                   req4={moduloFirmaEscritorio.req4}
                                   req5={moduloFirmaEscritorio.req5}
                                   downloadLink1={moduloFirmaEscritorio.downloadLink1}
                                   downloadLink2={moduloFirmaEscritorio.downloadLink2}
                                   downloadTextLang={servicioFirmaEnLinea.downloadTextLang}
                                   CTAText={moduloFirmaEscritorio.CTAText}
                                   CTAHref={moduloFirmaEscritorio.CTAHref}/> :
                    null
                }

                

            </div>

        </section>

    </>
  )
}

export default Firmas