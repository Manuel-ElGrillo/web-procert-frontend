import React from 'react'
import HeaderEN from './header/HeaderEN'
import FooterEN from './footer/FooterEN'

const LayoutEN = ({children}) => {
  return (
    <>
    
        <HeaderEN/>
            {children}
        <FooterEN/>
    
    </>
  )
}

export default LayoutEN