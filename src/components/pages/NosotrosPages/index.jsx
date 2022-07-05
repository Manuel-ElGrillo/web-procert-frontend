import React from 'react'
import Layout from '../../layout/Layout'
import MisionPage from "./MisionPage"
import VisionPage from "./VisionPage"
import ValoresPage from "./ValoresPage"
import HSMPage from "./HSMPage"
import "./Nosotros.css"

const index = () => {
  return (
      <>

          <Layout>

              <section className='nosotros-page'>

                  <MisionPage />

                  <VisionPage />

                  <ValoresPage />

                  <HSMPage />

              </section>

          </Layout>

      </>
  )
}

export default index