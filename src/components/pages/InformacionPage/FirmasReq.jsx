import React from 'react'
import CTA from '../../CTA/CTA'
import "./Firmas.css"

const FirmasReq = ({description, requirement, requirementText, cost, costText, req1, req2, req3, req4, req5, downloadLink1, downloadTextLang, downloadLink2, CTAText, CTAHref}) => {
  return (
    <>
        <p>{description}</p>
        <h4>{cost}</h4>
        <p>{costText}</p>
        <h4>{requirement}</h4>
        <p>{requirementText}</p>
        <ul>
            <li>{req1}</li>
            <li>{req2}</li>
            <li>{req3}</li>
            <li>{req4} <a href={downloadLink1}>{downloadTextLang}</a></li>
            <li>{req5} <a href={downloadLink2}>{downloadTextLang}</a></li>
        </ul>

        <CTA href={CTAHref}
             text={CTAText}/>
    </>
  )
}

export default FirmasReq