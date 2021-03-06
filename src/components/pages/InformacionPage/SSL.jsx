import React from 'react'
import { useState } from 'react'
import "./SSL.css"

const SSL = () => {

  const [ SSL1Text, setSSL1Text ] = useState(false)
  const [ SSL2Text, setSSL2Text ] = useState(false)
  const [ SSL3Text, setSSL3Text ] = useState(false)
  const [ SSL4Text, setSSL4Text ] = useState(false)
  const [ SSL5Text, setSSL5Text ] = useState(false)
  const [ SSL6Text, setSSL6Text ] = useState(false)
  const [ SSL7Text, setSSL7Text ] = useState(false)
  const [ SSL8Text, setSSL8Text ] = useState(false)
  const [ SSL9Text, setSSL9Text ] = useState(false)
  const [ SSL10Text, setSSL10Text ] = useState(false)

  const handleSSL1 = () => {
    setSSL1Text(!SSL1Text)
  }

  const handleSSL2 = () => {
    setSSL2Text(!SSL2Text)
  }

  const handleSSL3 = () => {
    setSSL3Text(!SSL3Text)
  }

  const handleSSL4 = () => {
    setSSL4Text(!SSL4Text)
  }

  const handleSSL5 = () => {
    setSSL5Text(!SSL5Text)
  }

  const handleSSL6 = () => {
    setSSL6Text(!SSL6Text)
  }

  const handleSSL7 = () => {
    setSSL7Text(!SSL7Text)
  }

  const handleSSL8 = () => {
    setSSL8Text(!SSL8Text)
  }

  const handleSSL9 = () => {
    setSSL9Text(!SSL9Text)
  }

  const handleSSL10 = () => {
    setSSL10Text(!SSL10Text)
  }

  let ssl1 = "Este tipo de certificado le ayudará a proteger su dominio www.dominio.com, y durante su emisión la empresa Wisekey ofrece procedimientos exhaustivos de autenticación (verificación de identidad y nombre de dominio)."

  let ssl2 = "thawte ofrece una solución cómoda con su producto Wildcard. Este producto es un certificado de servidor Web que permite proteger múltiples subdominios en un domino en el mismo servidor utilizando la plantilla *.dominio.com como nombre común. Usted no volverá a verse obligado a perder tiempo, dinero y esfuerzo para obtener certificados para todos los contenidos alojados en un mismo dominio."

  let ssl3 = "En este tipo de certificados thawte ofrece procedimientos exhaustivos de autenticación (verificación de identidad y nombre de dominio). Ofrece también codificación de 256, 128, 56 o 40 bits según la capacidad del navegador de su cliente y el sistema de codificación instalado en su servidor. Esto garantiza que la información se mantenga en privado entre su servidor Web y los navegadores de sus clientes."

  let ssl4 = "Es el certificado thawte con mayor capacidad de codificación. Incrementa de forma automática la protección hasta una codificación mínima de 128 bits, incluso para usuarios que utilicen navegadores antiguos (IE 4.X o Netscape 4.06 y posteriores) con capacidad de codificación limitada a 40 o 56 bits. Es posible conseguir una codificación de 256 bits si tanto la capacidad del navegador de su cliente como el sistema de codificación instalado en su servidor son compatibles."

  let ssl5 = "Consiga los certificados SSL con Extended Validation capaces de ofrecer un cifrado de hasta 256 bits en combinación con el más potente estándar de autenticación de identidad del mercado. Incremente la confianza de las personas que visitan su sitio web con la nueva barra de direcciones en color verde mostrada con la autenticación SSL Extended."

  let ssl6 = "Los Certificados thawte de firma de código son altamente recomendables para editores que se dispongan a distribuir códigos o contenidos a través de Internet o extranet corporativas y necesiten asegurar la integridad y autoría de los mismos."

  let ssl7 = "Con este certificado usted podrá asegurar su dominio y todos los sub-dominios de primer nivel. Este tipo de certificados no se limitan a proteger un dominio solamente, posee una licencia ilimitada permitiendo tener un único par de llaves y CSR por cada servidor sin costo adicional. El certificado es emitido al dominio *.dominio.com."

  let ssl8 = "Este tipo de certificados son PLUS porque además de proteger su dominio www.dominio.com, protegerá dominio.com (sin el www), y de esta forma reducirá las probabilidades de recibir un mensaje de advertencia en los navegadores."

  let ssl9 = "Los certificados SSL con Validación Extendida son una innovación que incrementa la construcción de una infraestructura de seguridad dentro de internet, vital para el comercio electrónico. Estos certificados mostrarán inmediatamente a los visitantes de su página web que usted es confiable, una vez que instale el certificado, toda la barra de navegación de los browsers, de los usuarios, se mostrarán de color verde cuando visiten el site, verificando que usted es Auténtico y de Confianza. Este certificado diferenciará su Website de todos los demás que aún utilizan certificados SSL tradicionales."

  let ssl10 = "EL UC Certificate le otorga el control total del campo de Nombre Alternativo de Sujeto (SAN), en función de brindarle seguridad a tantos host names como lo requiera, con un solo certificado SSL; por ejemplo, asegurar múltiples servicios Exchange 2007 (OWA, SMTP, Autodiscovery, ActiveSync, Outlook Anywhere) con un Certificado UCC, reduciendo así la complejidad de configuración del servidor. También es posible asegurar su Website y su servidor de correo combinando ambos nombres de los servidores en un sólo Certificado UCC."

  return (
    <>
    
        <section className="ssl">

            <h2>Certificados de Seguridad {"(Certificados Internacionales)"}</h2>

              <p onClick={handleSSL1}>Standard SSL</p>
              <span>
                {SSL1Text ? ssl1 : null}
              </span>

              <p onClick={handleSSL2}>WildCard SSL de Servidor WEB</p>
              <span>
                {SSL2Text ? ssl2 : null}
              </span>

              <p onClick={handleSSL3}>SSL de Servidor WEB</p>
              <span>
                {SSL3Text ? ssl3 : null}
              </span>

              <p onClick={handleSSL4}>SCG SuperCert</p>
              <span>
                {SSL4Text ? ssl4 : null}
              </span>

              <p onClick={handleSSL5}>SSL de servidor WEB con EV</p>
              <span>
                {SSL5Text ? ssl5 : null}
              </span>

              <p onClick={handleSSL6}>Firma de Códigos</p>
              <span>
                {SSL6Text ? ssl6 : null}
              </span>

              <p onClick={handleSSL7}>WildCard SSL Plus</p>
              <span>
                {SSL7Text ? ssl7 : null}
              </span>

              <p onClick={handleSSL8}>Standard SSL Plus</p>
              <span>
                {SSL8Text ? ssl8 : null}
              </span>

              <p onClick={handleSSL9}>Validación Extendida SSL</p>
              <span>
                {SSL9Text ? ssl9 : null}
              </span>

              <p onClick={handleSSL10}>Unified Communications Certificate</p>
              <span>
                {SSL10Text ? ssl10 : null}
              </span>

        </section>
    
    </>
  )
}

export default SSL