import React from 'react'
import "./CTA.css"

const CTA = ({text}) => {
  return (
    <>
    
        <div className='cta'>
            <a href="mailto:contacto@procert.net.ve">{text}</a>
        </div>
    
    </>
  )
}

export default CTA