import React from 'react'
import { Link } from 'react-router-dom'
import LayoutEN from '../../layout/LayoutEN'
import CTA from '../../CTA/CTA'
import "../ComprasPage/ComprasPage.css"

const PurchasesPage = () => {
  return (
    <>

      <LayoutEN>

        <section className="purchases">

          <h1>Purchase Certificates</h1>

          <div className='CTA-AR'>
            <Link to={"/sistemaAR"}>AR System</Link>
          </div>

          <h2>Steps to Request an Electronic Signature Certificate</h2>

          <div className="purchases-content">

            <h3>Electronic Signature Certificate</h3>

            <ol>

              <li>Ask for an estimate by sending an e-mail to: <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a></li>

              <li>Do a deposit directly in our bank accounts (contact us trought e-mail to know the numbers account)</li>

              <li>Send the requisites depending on the certificate type you require (<Link to={"/en/requirements"}>see requisites</Link>)to our offices or send them to our e-mail: <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a>. It is mandatory that all the requirements are properly recorded, because it is a requirement of the Venezuelan legislation without the same is not possible issuance of the electronic certificates</li>

              <li>Within a three day period, we will contact you to make an appointment to validate your identity and information to be certified</li>

              <li>Login to our <a href="https://ura.procert.net.ve/ura/user/Logon.aspx">Certificate System</a> with your ID and password (previously supplied by us) to check the information included in the form and press click on the Generate button</li>

              <p><strong>Note:</strong> For the process of generating the cryptographic key pair (Step 5), you must use the Microsoft Internet Explorer browser if OS Windows, for Linux -based distributions, you must use the Mozilla Firefox browser , otherwise your request will not be processed by PROCERT.</p>

              <li>Within a five working days period you will receive an e-mail with your digital certificate</li>

            </ol>

          </div>

          <div className="purchases-content">

            <h3>SSL Secure Server Certificate (International Certificates)</h3>

            <ol>

              <li>Ask for an estimate by sending an e-mail to: <a href="mailto:contacto@procert.net.ve">contacto@procert.net.ve</a></li>

              <li>Do a deposit directly in our bank accounts (contact us trought e-mail to know the numbers account)</li>

              <li>Send to our email or our office the following documents:</li>

              <ul>

                <li>Request or CSR file generated from the Web server where the electronic certificate will be installed</li>

                <li>Copy of the document establishing the company</li>

                <li>Copy of ID</li>

                <li>Copy of the latest designation of authorities</li>

              </ul>

              <p><strong>Note:</strong> During the domain validation is possible that our partner ( Thawthe , Digicert or Wisekey ) request additional documentation.</p>

              <li>In a period not exceeding 3 working days after receiving all documentation and payment , you will receive an email with your electronic certificate</li>

            </ol>

          </div>

          <h2>Pricing</h2>

          <div className="purchases-prices">

            <h3>Certificados</h3>

            <ul>

              <li><span>Legal Representative of a Private Company</span> - 1 Year {"(Consult Price)"}</li>

              <p>The digital certificate the Legal Representative of a Public Company is issued under the name of a physical person in a determined public entity or government organization. The certificate holder is identified not only as a physical person belonging to a public company, but also by his qualifications as a legal representative or attorney in fact.</p>

              <li><span>Legal Representative of a Private Company</span> - 1 Year {"(Consult Price)"}</li>

              <p>The digital certificate of the Legal Representative of a Private Company is issued under the name of a physical person in a given company. The certificate holder is identified not only as a physical person belonging to a private company, but also by his qualifications as a legal representative or attorney in fact.</p>

              <li><span>Company Employee</span> - 1 Year {"(Consult Price)"}</li>

              <p>The digital certificate of a Company Employee guarantees the identity of the physical person who holds the certificate as well as his entailment with a determined company, public entity or government organization, with regards to the position held. This certificate by itself shall not provide greater competences to its holder than those he already has for performing his normal duties.</p>

              <li><span>University Graduate;</span> - 1 Year {"(Consult Price)"}</li>

              <p>The University Graduate digital certificate guarantees the physical identity of the person holding the certificate as well as a natural person states that he holds a university graduate degree recognized before the Bolivarian Republic of Venezuela or a foreign country and that he has obtained the corresponding registry, license, professional diploma required to practice his occupation.</p>

              <li><span>Natural Person</span> - 1 Year {"(Consult Price)"}</li>

              <p>The digital certificate of a Natural Person guarantees the identity of the physical person holding the certificate. This certificate by itself shall not provide greater competences to its holder.</p>

              <li><span>Standard SSL</span> - 1 Year {"(Consult Price)"}</li>

              <p>This type of certificate will help him to protect your www.domain.com domain, and during its emission the Wisekey company offers exhaustive procedures of authentication (verification of identity and name of domain)</p>

              <li><span>Transaction Signing</span></li>

              <p>The Transaction Signing Certificates guarantee the integrity and non-repudiation of electronic transactions by natural or legal persons and the data contained in each transaction. PROCERT has modular developments that can be integrated into systems and applications that enable customers automatically sign transactions in different operating environments, contemplating the signing of several file types (.jpg, .pdf, .txt, .tif, etc.). And then direct it to the destination assigned by the client.
                Bs. 0,15,00, per each signed transaction. The transaction certificate is associated with a module that is integrated into user's systems. The cost of integration is apart and previously valued.</p>

              <li><span>Electronic Billing</span></li>

              <p>Certificates Electronic Billing supports the integrity and non-repudiation of vouchers issued in accordance with legal and administrative rules in electronic form and derived from electronic or non-electronic transactions by natural or legal persons, public or private, and the data contained in each transaction. PROCERT has a modular development that can be integrated into accounting systems and software that enable customers to sign bills automatically generated by these systems, giving to electronic file that must comply with legal and formal requirements of the bill, the legal test in accordance with the provisions of the Decree Law on Data Messages and Electronic Forms.</p>

              <li><span>Electronic Banking</span></li>

              <p>Electronic Banking Certificate will allow the user to perform two-factor authentication on the bank's website, sign transactions, establish the authorship of your transaction and provide non-repudiation, thus allowing secure electronic transactions of the banking system, preventing Phishing (Social Engineering) and minimizing potential phishing scams. This complies with the rules SUDEBAN for Online Banking, the Law for the Defense of People's Access to Goods and Services and the Law on Data Messages and Electronic Signatures.</p>

            </ul>

            <CTA href={"mailto:contacto@procert.net.ve"}
              text={"Consult Prices"} />

          </div>

          

        </section>

      </LayoutEN>

    </>
  )
}

export default PurchasesPage