import React from 'react'
import "../../EnlacesPage/OCSP.css"

const OCSPEN = () => {
  return (
      <>

          <div className="ocsp">

              <h2>How to consult certificates issued through OCSP?</h2>

              <h3>Previous requirements</h3>

              <p>- Have installed the application on your computer Open SSL. Otherwise, download it by clicking the following <a href="/downloads/Open-SSL.zip">link</a>.</p>

              <p>- Place a copy of the root certification authority of Procert certification DER folder of the Open SSL application. In case of not having the certificate, you can download it through the following <a href="https://ura.procert.net.ve/pscprocert/Procert.cer">link</a> and place it in the folder mentioned before.</p>

              <p>- Place a copy of the certificate to be reviewed in DER format in the bin folder of the Open SSL application. In case of not having the certificate, you can download it through the following <a href="https://ura.procert.net.ve/ura/public/">link</a> and place it in the folder mentioned before.</p>

              <h3>Procedure</h3>

              <ol>

                  <li>For verification through OCSP, click the Start button, click All Programs, then Accessories and then Command Prompt</li>

                  <li>Go to path to the bin folder where the Open SSL application is installed, in which certificates are previously stored</li>

                  <li>Then enter the following command (without parentheses) to convert the root certificate of the certification to PEM format: openssl x509 -inform der -in (nombre del certificado raíz).cer -out (nombre deseado para el certificado raíz).pem</li>

                  <li>Then place the following command ( without parentheses ) to convert the certificate to be reviewed to PEM format: openssl x509 -inform der -in (nombre del certificado a ser revisado).cer -out (nombre deseado para el certificado a ser revisado).pem</li>

                  <li>Finally, place the following command to check the certificate through OCSP: openssl.exe ocsp -issuer (nombre del certificado raíz).pem -cert (nombre del certificado a ser revisado).pem -url http://ura.procert.net.ve/ocsp -text -noverify -no_nonce</li>

              </ol>

          </div>

      </>
  )
}

export default OCSPEN