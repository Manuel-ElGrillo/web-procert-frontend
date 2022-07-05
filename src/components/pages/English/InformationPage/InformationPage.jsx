import React from 'react'
import LayoutEN from "../../../layout/LayoutEN"
import OnlineSignature from "./OnlineSignature"
import FAQEN from "./FAQEN"
import Management from "./Management"
import SSLEN from "./SSLEN"
import "../../InformacionPage/InformacionPage.css"

const InformationPage = () => {
  return (
    <>

      <LayoutEN>

        <section className="info">

          <div className="info-container">

            <OnlineSignature />

            <FAQEN />

            <SSLEN />

            <Management />

          </div>

        </section>

      </LayoutEN>

    </>
  )
}

export default InformationPage