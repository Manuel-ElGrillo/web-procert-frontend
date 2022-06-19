import React from 'react'
import { useState } from 'react'
import Layout from '../../layout/Layout'
import "./TutorialesPage.css"

const TutorialesPage = () => {

  // Estado por defecto de la sección de tutoriales

  const [src, setSrc] = useState("https://www.youtube.com/embed/CrCXXuwJcqE")
  const [srcTitle, setSrcTitle] = useState ("Certificado Electrónico")

  // Funciones que cambian títulos y URLs de tutoriales

  const handleTutorial1 = () => {
    setSrc("https://www.youtube.com/embed/CrCXXuwJcqE")
    setSrcTitle("Certificado Electrónico")
  }

  const handleTutorial2 = () => {
    setSrc("https://www.youtube.com/embed/jinMfhdBAIU")
    setSrcTitle("Certificado - Outlook")
  }

  return (
    <>
    
        <Layout>

          <section className="tutorials">

            <div className="tutorials__links-container">

              <button onClick={handleTutorial1}>Certificado Electrónico</button>

              <button onClick={handleTutorial2}>Certificado Outlook</button>

              <button>Firma - Adobe Reader</button>

              <button>Firma - Correo Electrónico</button>
              
              <button>Protección - PDF</button>
              
              <button>Firma - Office 365</button>
              
              <button>PDF Protegido</button>
              
              <button>Firma - Word 2007</button>
              
              <button>Ataque Phishing</button>
              
              <button>Ataque Keylogger</button>
              
              <button>Firma en Lote</button>
              
              <button>Módulo de Firma</button>
              
              <button>Firma Digital en Gmail</button>

            </div>

            <div className="tutorials__video-container">

              <div className="tutorial-video">

                <h2>Tutorial: {srcTitle}</h2>

                <iframe src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={srcTitle}></iframe>

              </div>

            </div>
          </section>

        </Layout>

    </>
  )
}

export default TutorialesPage