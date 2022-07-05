import React from 'react'
import { useState } from 'react'
import "../../InformacionPage/SSL.css"

const SSLEN = () => {

    const [ SSL1Text, setSSL1Text ] = useState(false)
    const [ SSL2Text, setSSL2Text ] = useState(false)
    const [ SSL3Text, setSSL3Text ] = useState(false)
    const [ SSL4Text, setSSL4Text ] = useState(false)
    const [ SSL5Text, setSSL5Text ] = useState(false)
    const [ SSL6Text, setSSL6Text ] = useState(false)
    const [ SSL7Text, setSSL7Text ] = useState(false)
    const [ SSL8Text, setSSL8Text ] = useState(false)
    const [ SSL9Text, setSSL9Text ] = useState(false)
    const [ SSL10Text, setSSL10Text ] = useState(false)

    const handleSSL1 = () => {
        setSSL1Text(!SSL1Text)
      }
    
      const handleSSL2 = () => {
        setSSL2Text(!SSL2Text)
      }
    
      const handleSSL3 = () => {
        setSSL3Text(!SSL3Text)
      }
    
      const handleSSL4 = () => {
        setSSL4Text(!SSL4Text)
      }
    
      const handleSSL5 = () => {
        setSSL5Text(!SSL5Text)
      }
    
      const handleSSL6 = () => {
        setSSL6Text(!SSL6Text)
      }
    
      const handleSSL7 = () => {
        setSSL7Text(!SSL7Text)
      }
    
      const handleSSL8 = () => {
        setSSL8Text(!SSL8Text)
      }
    
      const handleSSL9 = () => {
        setSSL9Text(!SSL9Text)
      }
    
      const handleSSL10 = () => {
        setSSL10Text(!SSL10Text)
      }

      let ssl1 = "This type of certificate will help him to protect your www.domain.com domain, and during its emission the Wisekey company offers exhaustive procedures of authentication (verification of identity and name of domain)."

      let ssl2 = "Thawte offers a convenient solution with the Wildcard product. This product is a Certificate of Web server conveniently allows you to secure multiple sub domains on one domain on the same server using *.domain.com pattern for the common name. You will not return to see yourself forced to lose time, money and effort to obtain certificates for all the contents lodged in a same domain."
    
      let ssl3 = "In this type of Certificates thawte offers comprehensive authentication procedures (domain name and identity verification). It also offers 256, 128, 56 or 40-bit encryption depending on your client's browser capability and the cipher suite installed on your web server. This ensures that information is kept private while in transit between your web server and your clients' web browsers."
    
      let ssl4 = "Is thawte's strongest encryption certificate. It automatically steps up protection to a minimum of 128-bit encryption even if your customers use older browsers which have limited 40-bit or 56-bit encryption capabilities. 256-bit encryption can be enabled if your client's browser capability and the cipher suite installed on your web server are both 256-bit compatible."
    
      let ssl5 = "Obtain SSL certificates with Extend Validation able to offer a coding up to 256 bits in combination with the most powerful standard of authentication of identity of the market. Increases the confidence of the people who visit their Web site with the new bar of directions in shown green color with the SSL Extended authentication."
    
      let ssl6 = "The certificates of thawte of code signing are strongly recommended for any publisher who plans to distribute code or content over the Internet or corporate extranets and needs to assure the integrity and authorship of that code."
    
      let ssl7 = "With this certificate you will be able to assure his domain and all the sub-domains of first level. This type of certificates certificate is not limited to only protect a domain, owns an extended leave of absence allowing to have a unique pair of keys and CSR by each servant without additional cost. The certificate is issued to the domain *.domain.com."
    
      let ssl8 = "This type of certificates is EXTRA because besides protecting your www.domain.com domain, it will protect domain.com (without the www), and of this form it will reduce the probabilities of receiving a message of warning in the navigators."
    
      let ssl9 = "Certificates SSL with Extended Validation are an innovation that increases the construction of an infrastructure of security within Internet, vital for the electronic commerce. These certificates will show immediately to the visitors of their page Web that you are reliable, once she installs the certificate, all the bar of navigation of browsers, of the users, will be of green color when they visit site, verifying that you are Authentic and of Confidence. This certificate will differentiate its Website from all the others that still use traditional certificates SSL."
    
      let ssl10 = "The UC Certificate grants the total control to him of the field of Subject Alternative Name (SAN), based on offering him to security to so many host yams it requires as it, with a single certificate SSL; for example, to assure manifolds Exchange services 2007 (OWA, smtp, Autodiscovery, ActiveSync, Outlook Anywhere) with a Certificate UCC, reducing therefore complexity of configuration of the servant. Also it is possible to assure his Website and its servant mail being combined both names of the servers in a single Certificate UCC."

  return (
      <>

          <section className="ssl">

              <h2>Security Certificates</h2>

              <p onClick={handleSSL1}>Standard SSL</p>
              <span>
                {SSL1Text ? ssl1 : null}
              </span>

              <p onClick={handleSSL2}>Wildcard SSL Certificates</p>
              <span>
                {SSL2Text ? ssl2 : null}
              </span>

              <p onClick={handleSSL3}>SSL Web Server Certificate</p>
              <span>
                {SSL3Text ? ssl3 : null}
              </span>

              <p onClick={handleSSL4}>SCG SuperCert</p>
              <span>
                {SSL4Text ? ssl4 : null}
              </span>

              <p onClick={handleSSL5}>Web Server Certificate with EV</p>
              <span>
                {SSL5Text ? ssl5 : null}
              </span>

              <p onClick={handleSSL6}>Code Signing</p>
              <span>
                {SSL6Text ? ssl6 : null}
              </span>

              <p onClick={handleSSL7}>WildCard SSL Plus</p>
              <span>
                {SSL7Text ? ssl7 : null}
              </span>

              <p onClick={handleSSL8}>Standard SSL Plus</p>
              <span>
                {SSL8Text ? ssl8 : null}
              </span>

              <p onClick={handleSSL9}>Extended validation SSL</p>
              <span>
                {SSL9Text ? ssl9 : null}
              </span>

              <p onClick={handleSSL10}>Unified Communications Certificate</p>
              <span>
                {SSL10Text ? ssl10 : null}
              </span>

          </section>

      </>
  )
}

export default SSLEN