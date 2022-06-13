import React from 'react'
import "./SoporteCard.css"

const SoporteCard = ({iconURL, alt, title, OP1, OP2, OP3, OP4, OP5, OP6, OP7}) => {
  return (
    <>
    
        <div className='support-card'>

            <div className='support-card__img'>
                <img src={iconURL} alt={alt} />
            </div>

            <p>{title}</p>

            <span>{OP1}</span>
            <span>{OP2}</span>
            <span>{OP3}</span>
            <span>{OP4}</span>
            <span>{OP5}</span>
            <span>{OP6}</span>
            <span>{OP7}</span>

        </div>
    
    </>
  )
}

export default SoporteCard