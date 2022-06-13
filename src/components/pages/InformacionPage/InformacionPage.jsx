import React from 'react'
import Layout from "../../layout/Layout"
import Firmas from './Firmas'
import FAQ from './FAQ'
import SSL from './SSL'
import Gestion from './Gestion'
import "./InformacionPage.css"

const InformacionPage = () => {

  return (
    <>

      <Layout>

        <section className="info">

          <div className="info-container">

            <Firmas/>

            <FAQ/>

            <SSL/>

            <Gestion/>

          </div>

        </section>
        
      </Layout>
    
    </>
  )
}

export default InformacionPage