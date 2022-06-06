import React from 'react'
import Layout from '../../layout/Layout'
import "./Nosotros.css"

const ValoresPage = () => {

  return (
    <>
    
      <Layout>

        <section className='nosotros-page'>

          <div className='nosotros-container'>
            <h2>Valores</h2>
            <p>
              ° Ética = En la gestión regular de la empresa y en las relaciones con proveedores y usuarios. <br />
              ° Innovación = En la búsqueda de facilidades o soluciones integrales o modulares que simplifiquen el proceso general de la empresa para con sus proveedores y usuarios. <br />
              ° Seguridad = En el mantenimiento de la información almacenada y en los mecanismos y procedimientos de protección de la información.
            </p>
          </div>

        </section>

      </Layout>

    </>
  )
}

export default ValoresPage