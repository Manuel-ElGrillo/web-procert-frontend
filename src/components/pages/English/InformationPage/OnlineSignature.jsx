import React from 'react'
import { useState } from 'react'
import FirmasReq from '../../InformacionPage/FirmasReq'
import "../../InformacionPage/Firmas.css"

const OnlineSignature = () => {

    const [sign1, setSing1] = useState(false)
    const [sign2, setSign2] = useState(false)

    const handleSign1 = () => {
        setSing1(!sign1)
    }

    const handleSign2 = () => {
        setSign2(!sign2)
    }

    const onlineSigningService = {
        description: "The signature service online PDF documents exclusively allow users PROCERT , electronically sign from operating systems (Windows and Linux) with internet access. Resulting in the electronically signed .pdf document to any action that the user requires.",

        requirement: "Previous requirements",

        requirementText: "Before using the online signature service , please check if you have the following components:",

        req1: "Electronic certificate acquired from PROCERT with attribute for signing documents.",

        req2: "Drivers of e- token device installed on your computer (if is the case)",

        req3: "Drivers de dispositivo e-token instalados en el ordenador (si aplica)",

        req4: "Java Runtime Environment. If it has not installed on your computer, you can download it clicking",

        req5: "PDF Adobe Reader. If it has not installed on your computer, you can download it by clicking",

        downloadLink1: "https://www.java.com/es/download/",

        downloadLink2: "https://get.adobe.com/es/reader/otherversions/",

        downloadTextLang: "HERE",

        CTAText: "Ask for an Online Signing Service",

        CTAHref: "mailto:contacto@procert.net.ve",

    }

    const signatureModelDesk = {
        description: "The signature module for desktop will allow you to electronically process large volumes of PDF files . The user will get all documents signed electronically quickly and easily to any action that the user requires.",

        cost: "Price",

        costText: "Consult us by email. (The Signature Module does not include Electronic Certificate)",

        requirement: "Technical requirements",

        req1: "512 MB available RAM memory",

        req2: "Electronic certificate acquired from PROCERT with attribute for signing documents",

        req3: "Drivers of e- token device installed on your computer (if is the case))",

        req4: "Java Runtime Environment (Oracle). If it has not installed on your computer, you can download it by clicking",

        req5: "PDF Adobe Reader. If it has not installed on your computer, you can download it by clicking",

        downloadLink1: "https://www.java.com/es/download/",

        downloadLink2: "https://get.adobe.com/es/reader/otherversions/",

        downloadTextLang: "HERE",

        CTAText: "Consult",

        CTAHref: "mailto:contacto@procert.net.ve"

    }

  return (
      <>

          <section className="signatures">

              <h2>Online Signatures</h2>

              <div className='signatures-content'>

                  <h3 onClick={handleSign1}>Online Signing Service</h3>

                  {
                    sign1 ? 
                        <FirmasReq description={onlineSigningService.description}
                                   requirement={onlineSigningService.requirement}
                                   requirementText={onlineSigningService.requirementText}
                                   req1={onlineSigningService.req1}
                                   req2={onlineSigningService.req2}
                                   req3={onlineSigningService.req3}
                                   req4={onlineSigningService.req4}
                                   req5={onlineSigningService.req5}
                                   downloadLink1={onlineSigningService.downloadLink1}
                                   downloadLink2={onlineSigningService.downloadLink2}
                                   downloadTextLang={onlineSigningService.downloadTextLang}
                                   CTAText={onlineSigningService.CTAText}
                                   CTAHref={onlineSigningService.CTAHref}/> :
                    null
                }

              </div>

              <div className="signatures-content">

                  <h3 onClick={handleSign2}>Signature Model for Desktop</h3>

                  {
                    sign2 ?
                        <FirmasReq description={signatureModelDesk.description}
                                   cost={signatureModelDesk.cost}
                                   costText={signatureModelDesk.costText}
                                   requirement={signatureModelDesk.requirement}
                                   requirementText={signatureModelDesk.requirementText}
                                   req1={signatureModelDesk.req1}
                                   req2={signatureModelDesk.req2}
                                   req3={signatureModelDesk.req3}
                                   req4={signatureModelDesk.req4}
                                   req5={signatureModelDesk.req5}
                                   downloadLink1={signatureModelDesk.downloadLink1}
                                   downloadLink2={signatureModelDesk.downloadLink2}
                                   downloadTextLang={onlineSigningService.downloadTextLang}
                                   CTAText={signatureModelDesk.CTAText}
                                   CTAHref={signatureModelDesk.CTAHref}/> :
                    null
                }

              </div>

          </section>

      </>
  )
}

export default OnlineSignature