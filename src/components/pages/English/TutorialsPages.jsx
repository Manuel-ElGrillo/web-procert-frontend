import React from 'react'
import { useState } from 'react'
import LayoutEN from '../../layout/LayoutEN'
import "../TutorialesPage/TutorialesPage.css"

const TutorialsPages = () => {

  const [src, setSrc] = useState("https://www.youtube.com/embed/CrCXXuwJcqE")
  const [srcTitle, setSrcTitle] = useState ("Electronic Certificate")

  const handleTutorial1 = () => {
    setSrc("https://www.youtube.com/embed/CrCXXuwJcqE")
    setSrcTitle("Electronic Certificate")
  }

  const handleTutorial2 = () => {
    setSrc("https://www.youtube.com/embed/jinMfhdBAIU")
    setSrcTitle("Certificate - Outlook")
  }

  const handleTutorial3 = () => {
    setSrc("https://www.youtube.com/embed/QEd2s0qJG4M")
    setSrcTitle("Signature - Adobe Reader")
  }

  const handleTutorial4 = () => {
    setSrc("https://www.youtube.com/embed/CJHpLZnRNUU")
    setSrcTitle("Signature- Email")
  }

  const handleTutorial5 = () => {
    setSrc("https://www.youtube.com/embed/gJbL2jBn0gw")
    setSrcTitle("Protecting - PDF")
  }

  const handleTutorial6 = () => {
    setSrc("https://www.youtube.com/embed/qgYYGrov09Q")
    setSrcTitle("Signature - Office 365")
  }

  const handleTutorial7 = () => {
    setSrc("https://www.youtube.com/embed/DPuaAfpOgdY")
    setSrcTitle("Protected PDF")
  }

  const handleTutorial8 = () => {
    setSrc("https://www.youtube.com/embed/0vp8sZOCbvA")
    setSrcTitle("Signature - Word 2007")
  }

  const handleTutorial9 = () => {
    setSrc("https://www.youtube.com/embed/HfDHEJtTjMw")
    setSrcTitle("Phishing Attack")
  }

  const handleTutorial10 = () => {
    setSrc("https://www.youtube.com/embed/YYL97r0kGWY")
    setSrcTitle("Keylogger Attack")
  }

  const handleTutorial11 = () => {
    setSrc("https://www.youtube.com/embed/L1t5IOo9aKE")
    setSrcTitle("Batch signature")
  }

  // const handleTutorial12 = () => {
  //   setSrc("https://www.youtube.com/embed/h-lbfTnY5JM")
  //   setSrcTitle("Módulo de Firma")
  // }

  const handleTutorial13 = () => {
    setSrc("https://www.youtube.com/embed/8jvTMW7pRC0")
    setSrcTitle("Digital Signature in Gmail")
  }

  return (
    <>

      <LayoutEN>

        <section className="tutorials">

          <div className="tutorials__links-container">

            <button onClick={handleTutorial1}>Electronic Certificate</button>

            <button onClick={handleTutorial2}>Certificate - Outlook</button>

            <button onClick={handleTutorial3}>Signature - Adobe Reader</button>

            <button onClick={handleTutorial4}>Signature- Email</button>

            <button onClick={handleTutorial5}>Protecting - PDF</button>

            <button onClick={handleTutorial6}>Signature - Office 365</button>

            <button onClick={handleTutorial7}>Protected PDF</button>

            <button onClick={handleTutorial8}>Signature - Word 2007</button>

            <button onClick={handleTutorial9}>Phishing Attack</button>

            <button onClick={handleTutorial10}>Keylogger Attack</button>

            <button onClick={handleTutorial11}>Batch signature</button>

            {/* <button onClick={handleTutorial12}>Módulo de Firma</button> */}

            <button onClick={handleTutorial13}>Digital Signature in Gmail</button>

          </div>

          <div className="tutorials__video-container">

            <div className="tutorial-video">

              <h2>Tutorial: {srcTitle}</h2>

              <iframe src={src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={srcTitle}></iframe>

            </div>

          </div>

        </section>

      </LayoutEN>

    </>
  )
}

export default TutorialsPages