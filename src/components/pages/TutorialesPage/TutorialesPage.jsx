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

  const handleTutorial3 = () => {
    setSrc("https://www.youtube.com/embed/QEd2s0qJG4M")
    setSrcTitle("Firma - Adobe Reader")
  }

  const handleTutorial4 = () => {
    setSrc("https://www.youtube.com/embed/CJHpLZnRNUU")
    setSrcTitle("Firma - Correo Electrónico")
  }

  const handleTutorial5 = () => {
    setSrc("https://www.youtube.com/embed/gJbL2jBn0gw")
    setSrcTitle("Protección - PDF")
  }

  const handleTutorial6 = () => {
    setSrc("https://www.youtube.com/embed/qgYYGrov09Q")
    setSrcTitle("Firma - Office 365")
  }

  const handleTutorial7 = () => {
    setSrc("https://www.youtube.com/embed/DPuaAfpOgdY")
    setSrcTitle("PDF Protegido")
  }

  const handleTutorial8 = () => {
    setSrc("https://www.youtube.com/embed/0vp8sZOCbvA")
    setSrcTitle("Firma - Word 2007")
  }

  const handleTutorial9 = () => {
    setSrc("https://www.youtube.com/embed/HfDHEJtTjMw")
    setSrcTitle("Ataque Phishing")
  }

  const handleTutorial10 = () => {
    setSrc("https://www.youtube.com/embed/YYL97r0kGWY")
    setSrcTitle("Ataque Keylogger")
  }

  const handleTutorial11 = () => {
    setSrc("https://www.youtube.com/embed/L1t5IOo9aKE")
    setSrcTitle("Firma en Lote")
  }

  const handleTutorial12 = () => {
    setSrc("https://www.youtube.com/embed/h-lbfTnY5JM")
    setSrcTitle("Módulo de Firma")
  }

  const handleTutorial13 = () => {
    setSrc("https://www.youtube.com/embed/8jvTMW7pRC0")
    setSrcTitle("Firma Digital en Gmail")
  }

  return (
    <>
    
        <Layout>

          <section className="tutorials">

            <div className="tutorials__links-container">

              <button onClick={handleTutorial1}>Certificado Electrónico</button>

              <button onClick={handleTutorial2}>Certificado Outlook</button>

              <button onClick={handleTutorial3}>Firma - Adobe Reader</button>

              <button onClick={handleTutorial4}>Firma - Correo Electrónico</button>
              
              <button onClick={handleTutorial5}>Protección - PDF</button>
              
              <button onClick={handleTutorial6}>Firma - Office 365</button>
              
              <button onClick={handleTutorial7}>PDF Protegido</button>
              
              <button onClick={handleTutorial8}>Firma - Word 2007</button>
              
              <button onClick={handleTutorial9}>Ataque Phishing</button>
              
              <button onClick={handleTutorial10}>Ataque Keylogger</button>
              
              <button onClick={handleTutorial11}>Firma en Lote</button>
              
              <button onClick={handleTutorial12}>Módulo de Firma</button>
              
              <button onClick={handleTutorial13}>Firma Digital en Gmail</button>

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