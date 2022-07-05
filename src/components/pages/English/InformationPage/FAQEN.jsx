import React from 'react'
import { useState } from 'react'
import "../../InformacionPage/FAQ.css"

const FAQEN = () => {

    const [showAnswer1, setShowAnswer1] = useState(false)
    const [showAnswer2, setShowAnswer2] = useState(false)
    const [showAnswer3, setShowAnswer3] = useState(false)
    const [showAnswer4, setShowAnswer4] = useState(false)
    const [showAnswer5, setShowAnswer5] = useState(false)
    const [showAnswer6, setShowAnswer6] = useState(false)
    const [showAnswer7, setShowAnswer7] = useState(false)
    const [showAnswer8, setShowAnswer8] = useState(false)
    const [showAnswer9, setShowAnswer9] = useState(false)
    const [showAnswer10, setShowAnswer10] = useState(false)
    const [showAnswer11, setShowAnswer11] = useState(false)
    const [showAnswer12, setShowAnswer12] = useState(false)
    const [showAnswer13, setShowAnswer13] = useState(false)

    const handleAnswer1 = () => {
        setShowAnswer1(!showAnswer1)
    }
    
    const handleAnswer2 = () => {
        setShowAnswer2(!showAnswer2)
    }
    
    const handleAnswer3 = () => {
        setShowAnswer3(!showAnswer3)
    }
    
    const handleAnswer4 = () => {
        setShowAnswer4(!showAnswer4)
    }
    
    const handleAnswer5 = () => {
        setShowAnswer5(!showAnswer5)
    }
    
    const handleAnswer6 = () => {
        setShowAnswer6(!showAnswer6)
    }
    
    const handleAnswer7 = () => {
        setShowAnswer7(!showAnswer7)
    }
    
    const handleAnswer8 = () => {
        setShowAnswer8(!showAnswer8)
    }
    
    const handleAnswer9 = () => {
        setShowAnswer9(!showAnswer9)
    }
    
    const handleAnswer10 = () => {
        setShowAnswer10(!showAnswer10)
    }
    
    const handleAnswer11 = () => {
        setShowAnswer11(!showAnswer11)
    }
    
    const handleAnswer12 = () => {
        setShowAnswer12(!showAnswer12)
    }
    
    const handleAnswer13 = () => {
        setShowAnswer13(!showAnswer13)
    }

    let answer1 = "It is a mathematical scheme that serves to prove the authenticity of a digital message or electronic document. digital signature gives the reciever the security that the message was created by the sender and was not altered during transmission, if performed with a certificate from the PSC Procert, it gives the document the same legal validity as a signature handwritten."

    let answer2 = "After a document is signed electronically it can detect any manipulation of the document, as the electronic signature is linked to both the document and the signer. In case of manipulation of the document to be signed later, signing the document is altered, negating the validity of the document content."
  
    let answer3 = "The activities developed by the PSC PROCERT in the area of electronic certification are regulated by the Decree Law on Data Messages and Electronic Signatures # 1181 dated 17/01/01, which envisages the creation of the Certification Service Providers (PSC). In addition to monitoring by the Venezuelan State exerted by the Superintendence of Electronic Certification Services (SUSCERTE) organism integrated to the organic structure of the Ministry of Popular Power for Science, Technology and Intermediate Industries of the Bolivarian Republic of Venezuela."
  
    let answer4 = `You can digitally sign a document for the same reasons that can sign a paper document. A digital signature is used to authenticate digital information, including documents and emails using digital cryptography. Digital signatures help establish the following guarantees: 
      1) Authentication: Authentication is the process of attempting to verify the digital identity of the sender of a communication as a request to connect. The digital signature helps ensure that the signer is who he claims to be
      2) Integrity: The digital signature helps ensure that the content has not been changed or altered with since it was digitally signed
      3) Non-repudiation: The user can not deny authorship of signature or transaction as only he manages his private key
    `
  
    let answer5 = "Electronic signatures can be used in proceedings before government, education, insurance and encrypted mail, human resources, payments, payroll, electronic procurement processes, procurement processes and other electronic or online, counting all with legal evidence in courts the Bolivarian Republic of Venezuela."
  
    let answer6 = "An electronic certificate is a digital document by which a trusted third party (an Authority Certification in this case PROCERT) ensures the link between the identity of an individual or entity and its public key."
  
    let answer7 = `The identity of the user data either legal or natural.  
      1) The user's public key. 
      2) The data specific to the certificate: issue date, expiration date, unique serial number, certificate applications, among others.  
      3) Information that certificates Provider (PSC) has issued the certificate. 
      4) PSC signature.
    `
  
    let answer8 = "To obtain a certificate go to the Purchases section and follow the steps there."
  
    let answer9 = "Depending on the type of certificate prices are different."
  
    let answer10 = "No, regularization of the Law on Data Messages and Electronic Signatures, the certificates are not exportable, therefore then generated can not be exported to other devices."
  
    let answer11 = "A token is a hardware-based cryptographic device that stores and protects cryptographic keys, this device has a USB interface that provides the user portability and mobility."
  
    let answer12 = "No, a pendrive can store more data, but does not have the storage capacity of cryptographic keys, unlike a token that is designed exclusively for that purpose."
  
    let answer13 = "No, the token value is not included in the value of the certificate."

  return (
      <>

          <section className="faq" id='faq'>

              <h2>FAQ</h2>

              <div className='questions-container'>

                  <div className='question'>
                      <p onClick={handleAnswer1}>What is a digital signature?</p>
                      <span>
                          {
                              showAnswer1 ? answer1 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer2}>What technical warranty offers digital signature?</p>
                      <span>
                          {
                              showAnswer2 ? answer2 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer3}>What legal warranty offers digital signature?</p>
                      <span>
                          {
                              showAnswer3 ? answer3 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer4}>What is the use of a digital signature?</p>
                      <span>
                          {
                              showAnswer4 ? answer4 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer5}>Where can in use electronic signatures?</p>
                      <span>
                          {
                              showAnswer5 ? answer5 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer6}>What is an electronic certificate?</p>
                      <span>
                          {
                              showAnswer6 ? answer6 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer7}>What data contains a electronic certificate?</p>
                      <span>
                          {
                              showAnswer7 ? answer7 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer8}>How do I obtain an electronic certificate?</p>
                      <span>
                          {
                              showAnswer8 ? answer8 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer9}>How much does the certificate?</p>
                      <span>
                          {
                              showAnswer9 ? answer9 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer10}>After my certificate get stored can I move it to another location?</p>
                      <span>
                          {
                              showAnswer10 ? answer10 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer11}>What is a token?</p>
                      <span>
                          {
                              showAnswer11 ? answer11 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer12}>Is it the same a token to a pendrive?</p>
                      <span>
                          {
                              showAnswer12 ? answer12 : null
                          }
                      </span>
                  </div>

                  <div className="question">
                      <p onClick={handleAnswer13}>The cost of the certificate includes the token?</p>
                      <span>
                          {
                              showAnswer13 ? answer13 : null
                          }
                      </span>
                  </div>

              </div>

          </section>

      </>
  )
}

export default FAQEN