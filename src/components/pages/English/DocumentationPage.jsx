import React from 'react'
import LayoutEN from '../../layout/LayoutEN'

import { gacetasEN } from '../../../data/documents/gacetas'
import { contractEN } from '../../../data/documents/modelo-de-contratos'
import { declarationsEN } from '../../../data/documents/declaracion-practicas-certificacion'

import "../DocumentacionPage/DocumentacionPage.css"

const DocumentationPage = () => {
  return (
    <>

      <LayoutEN>

        <section className='documents'>

          <h1>Certification Practice Statement and Certificate Policy AC Procert</h1>

          <p>
          To view the documents you need to have installed on your computer a PDF reader. If you do not own one, you can download it by clicking<a href="https://get.adobe.com/es/reader/otherversions/">HERE</a>.
          Select document Procert CA that you want to view or download in PDF format:
          </p>

          <div className='documents-gacetas__container'>

            <h2>Accreditation gazettes</h2>

            {
              gacetasEN.map(gaceta => (
                <div key={gaceta.id}
                  className="documents-gacetas">
                  <p>{gaceta.title}</p>
                  <a href={gaceta.archive}>View Gazette</a>
                </div>
              ))
            }

          </div>

          <div className='contracts__container'>

            <h2>Model contracts</h2>

            <div className='documents-contracts'>
              <p>{contractEN.name}</p>
              <a href={contractEN.archive}>View Contract</a>
            </div>

          </div>

          <div className='documents-certifications__container'>

            <h2>Certification Practices Statement</h2>

            <div>
              {
                declarationsEN.map(declaration => (
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

      </LayoutEN>

    </>
  )
}

export default DocumentationPage