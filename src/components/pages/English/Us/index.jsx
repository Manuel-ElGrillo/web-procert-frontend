import React from 'react'
import LayoutEN from "../../../layout/LayoutEN"
import HSMPageEN from "./HSMPageEN"
import MissionPage from "./MissionPage"
import ValuesPage from "./ValuesPage"
import ViewPage from "./ViewPage"

const index = () => {
  return (
    <>
    
        <LayoutEN>

            <section className="nosotros-page">

                <MissionPage />

                <ViewPage />

                <ValuesPage />

                <HSMPageEN />


            </section>

        </LayoutEN>
    
    </>
  )
}

export default index