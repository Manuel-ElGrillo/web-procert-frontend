import React from 'react'
import { useState } from 'react'
import "./FAQ.css"

const FAQ = () => {

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

  let answer1 = "Es un esquema matemático que sirve para demostrar la autenticidad de un mensaje digital o de un documento electrónico. la firma digital le brinda al destinatario la seguridad que el mensaje fue creado por el remitente, y que no fue alterado durante la transmisión, si se realiza con un certificado emitido por el PSC Procert, le brinda al documento la misma validez legal que una firma manuscrita."

  let answer2 = "Luego de que un documento es firmado electrónicamente se puede detectar cualquier manipulación del documento, ya que la firma electrónica está asociada tanto al documento como al firmante. En caso de manipulación del documento posteriormente de ser firmado, la firma del documento se altera, anulando la validez del contenido del documento."

  let answer3 = "Las actividades desarrolladas por el PSC PROCERT en el área de certificación electrónica se encuentran reguladas por el decreto Ley de Mensajes de Datos y Firmas Electrónicas # 1.181 con fecha 17/01/01, la cual prevé la creación de los Proveedores de Servicio de Certificación (PSC). Además con la supervisión por parte del Estado Venezolano ejercida por la Superintendencia de Servicios de Certificación Electrónica (SUSCERTE) organismo integrado a la estructura orgánica del Ministerio del Poder Popular para Ciencia, Tecnología e Industrias Intermedias de la República Bolivariana de Venezuela."

  let answer4 = `Puede firmar digitalmente un documento por las mismas razones que puede firmar un documento impreso. Una firma digital se usa para autenticar Información digital, como documentos, mensajes de correo electrónico y macros, mediante criptografía digital. Las firmas digitales ayudan a establecer las siguientes garantías: 
    1) Autenticación: La autenticación es el proceso de intento de verificar la identidad digital del remitente de una comunicación como una petición para conectarse. La firma digital ayuda a garantizar que la persona que firma es quien dice ser.
    2) Integridad: La firma digital ayuda a garantizar que el contenido no se ha cambiado ni se ha manipulado desde que se firmó digitalmente.
    3) No Repudio: El usuario no podrá negar la autoría de la firma o transacción pues solo él maneja su clave privada).
  `

  let answer5 = "La firma electrónica puede ser utilizada en procesos ante gobierno, educación, correo seguro y cifrado, recursos humanos, pagos, nóminas, procesos electrónicos de contratación, licitaciones y demás procesos electrónicos o a través de INTERNET, contando todo ello con prueba legal ante los Tribunales de la República Bolivariana de Venezuela."

  let answer6 = "Un Certificado Digital es un documento digital mediante el cual un tercero confiable (una autoridad de certificación en este caso PROCERT) garantiza la vinculación entre la identidad de un sujeto o entidad y su clave pública."

  let answer7 = `Los datos de identidad del usuario sea esta jurídica o natural.  
    1) La clave pública del usuario. 
    2) Los datos propios del certificado: fecha de emisión, fecha de caducidad, número de serie único, usos del certificado, entre otros.  
    3) La información del Proveedor de certificados (PSC) ha emitido dicho certificado. 
    4) La firma del PSC.
  `

  let answer8 = "Para obtener un certificado acceda a la sección de Compras y siga los pasos allí pautados."

  let answer9 = "Según el tipo de certificado los precios son distintos."

  let answer10 = "No, por regularización de la Ley de Mensajes de Datos y Firmas Electrónicas, los certificados no son exportables, por lo tanto luego de generados no puede ser exportados a otros dispositivos."

  let answer11 = "Un token es un dispositivo criptográfico basado en hardware que almacena y protege claves criptográficas, este dispositivo tiene una interfaz USB que le brinda al usuario portabilidad y movilidad."

  let answer12 = "No, un pendrive permite almacenar datos varios, pero no tiene la capacidad de almacenamiento de claves criptográficas, a diferencia de un token que está diseñado exclusivamente con ese fin."

  let answer13 = "No, el valor de token no está incluido en el valor del certificado."

  return (
    <>
    
        <section className="faq">

            <h2>Preguntas Frecuentes</h2>

            <div className='questions-container'>

              <div className='question'>
                <p onClick={handleAnswer1}>¿Qué es una firma digital?</p>
                <span>
                  {
                    showAnswer1 ? answer1 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer2}>¿Qué garantía técnica ofrece la firma digital?</p>
                <span>
                  {
                    showAnswer2 ? answer2 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer3}>¿Qué garantía legal ofrece la firma digital?</p>
                <span>
                  {
                    showAnswer3 ? answer3 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer4}>¿Para qué sirve una firma digital?</p>
                <span>
                  {
                    showAnswer4 ? answer4 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer5}>¿Dónde puedo utilizar la firma electrónica?</p>
                <span>
                  {
                    showAnswer5 ? answer5 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer6}>¿Qué es un certificado digital?</p>
                <span>
                  {
                    showAnswer6 ? answer6 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer7}>¿Qué datos contiene un certificado digital?</p>
                <span>
                  {
                    showAnswer7 ? answer7 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer8}>¿Cómo obtengo un certificado digital?</p>
                <span>
                  {
                    showAnswer8 ? answer8 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer9}>¿Qué costo tiene el certificado?</p>
                <span>
                  {
                    showAnswer9 ? answer9 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer10}>¿Luego de almacenado mi certificado lo puedo mover a otra locación?</p>
                <span>
                  {
                    showAnswer10 ? answer10 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer11}>¿Qué es un token?</p>
                <span>
                  {
                    showAnswer11 ? answer11 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer12}>¿Es igual un pendrive a un token?</p>
                <span>
                  {
                    showAnswer12 ? answer12 : null
                  }
                </span>
              </div>

              <div className="question">
                <p onClick={handleAnswer13}>¿El costo del certificado incluye el token?</p>
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

export default FAQ