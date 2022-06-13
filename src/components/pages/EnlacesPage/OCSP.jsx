import React from 'react'
import "./OCSP.css"

const OCSP = () => {
  return (
    <>
    
        <div className="ocsp">

            <h2>¿Cómo consultar certificados emitidos vía OCSP?</h2>

            <h3>Requisitos Previos</h3>

              <p>- Tener instalado en el equipo el aplicativo Open SSL. En caso contrario, descárguelo haciendo click en el siguiente <a href="/downloads/Open-SSL.zip">enlace</a>.</p>

              <p>- Colocar una copia del certificado raíz de la entidad de certificación Procert en formato DER dentro la carpeta bin de la aplicación Open SSL. En caso de no poseer el certificado, puede descargarlo a través del siguiente <a href="https://ura.procert.net.ve/pscprocert/Procert.cer">enlace</a> y colóquelo en la carpeta antes mencionada.</p>

              <p>- Colocar una copia del certificado que se desea revisar en formato DER dentro de la carpeta bin de la aplicación Open SSL. En caso de no poseer el certificado, puede descargarlo a través del siguiente <a href="https://ura.procert.net.ve/ura/public/">enlace</a> y colóquelo en la carpeta antes mencionada.</p>

            <h3>Procedimiento</h3>

            <ol>

                <li>Para realizar la verificación a través del OCSP, haga click en el botón Inicio, en Todos los programas, luego en Accesorios y luego en Símbolo del sistema</li>

                <li>Ingrese a la ruta de la carpeta bin donde se encuentra instalada la aplicación Open SSL, en la cual se encuentran los certificados previamente almacenados</li>

                <li>Luego ingrese el siguiente comando (sin paréntesis) para realizar la conversión del certificado raíz de la entidad de certificación a formato PEM: openssl x509 -inform der -in (nombre del certificado raíz).cer -out (nombre deseado para el certificado raíz).pem</li>

                <li>A continuación, coloque el siguiente comando (sin paréntesis) para realizar la conversión del certificado que se desea revisar a formato PEM: openssl x509 -inform der -in (nombre del certificado a ser revisado).cer -out (nombre deseado para el certificado a ser revisado).pem</li>

                <li>Por último, coloque el siguiente comando para realizar la comprobación del certificado a través del OCSP: openssl.exe ocsp -issuer (nombre del certificado raíz).pem -cert (nombre del certificado a ser revisado).pem -url http://ura.procert.net.ve/ocsp -text -noverify -no_nonce</li>

            </ol>
                  
        </div>

    </>
  )
}

export default OCSP