import React from 'react'
import Layout from '../../layout/Layout'
import "./Nosotros.css"

const HSMPage = () => {

  return (
    <>
    
      <Layout>

        <section className='nosotros-page'>

          <div className='nosotros-container'>
            <h2>HSM</h2>
            <p>
              ° Token Criptográfico: Es un dispositivo que permite almacenar certificados electrónicos mediante una interfaz USB la cual le permite iniciar sesión en cualquier equipo de computación. <br />

              ° Hardware Security Module (HSM): Es un dispositivo criptográfico basado en hardware que genera, almacena y protege claves criptográficas. Permite mejorar la seguridad de emisión de certificados PKI y encriptación de bases de datos a sistemas que emplean firmas digitales y las comunicaciones vía SSL.
            </p>
          </div>

        </section>

      </Layout>

    </>
  )
}

export default HSMPage