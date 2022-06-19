import React from 'react'
import Layout from "../../layout/Layout"
import { gacetas } from '../../../data/documents/gacetas'
import { contract } from '../../../data/documents/modelo-de-contratos'
import { declarations } from '../../../data/documents/declaracion-practicas-certificacion'
import "./DocumentacionPage.css"

const DocumentacionPage = () => {
  
  return (
    <>
    
      <Layout>

        <section className='documents'>

          <h1>Declaración de Prácticas de Certificación y Política de Certificados AC Procert</h1>

          <p>
            Para visualizar los documentos necesita tener instalado en su equipo un lector de PDF. En caso de no poseer uno, puede descargarlo haciendo click <a href="https://get.adobe.com/es/reader/otherversions/">AQUÍ</a>.
            Seleccione el documento de la AC Procert que desea consultar o descargar en formato PDF:
          </p>

          <div className='documents-gacetas__container'>

            <h2>Gacetas de Acreditación</h2>

            {
              gacetas.map(gaceta => (
                <div key={gaceta.id}
                     className="documents-gacetas">
                  <p>{gaceta.title}</p>
                  <a href={gaceta.archive}>Ver Gaceta</a>
                </div>
              ))
            }

          </div>

          <div className='contracts__container'>

            <h2>Modelo De Contratos</h2>

            <div className='documents-contracts'>
              <p>{contract.name}</p>
              <a href={contract.archive}>Ver Contrato</a>
            </div>

          </div>

          <div className='documents-certifications__container'>

            <h2>Declaración de Practicas de Certificación</h2>

            <div>
              {
                declarations.map ( declaration => (
                  <div key={declaration.id}
                       className='documents-certifications'>
                    <p>{declaration.title}</p>
                    <a href={declaration.archive}>{declaration.text}</a>
                  </div>
                ))
              }
            </div>

          </div>

        </section>
        
      </Layout>
    
    </>
  )
}

export default DocumentacionPage