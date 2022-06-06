import React from 'react'
import "./CTA.css"

const CTA = ({href, text}) => {
  return (
    <>
    
        <div className='cta'>
            <a href={href}>{text}</a>
        </div>
    
    </>
  )
}

export default CTA