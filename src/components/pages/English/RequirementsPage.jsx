import React from 'react'
import { Link } from 'react-router-dom'
import LayoutEN from '../../layout/LayoutEN'
import "../RequisitosPage/RequisitosPage.css"

const RequirementsPage = () => {
  return (
    <>

      <LayoutEN>

        <section className="requirements-page">

          <h1>Requirements for Certificates</h1>

          <div className="requirements-page__content" id="cert-0">

            <h2>Electronic Signature Certificate for Private Enterprises Representative</h2>

            <p><strong>Type certificate:</strong> Electronic signature</p>
            <p><strong>Description:</strong> Authorities Private Enterprise</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 001 (only one form per company) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Copy of the document establishing the company</li>
                <li>Copy of R.I.F</li>
                <li>Copy of the last designation of authorities</li>
                <li>Proof of payment of services, which the company is clearly indicated. (If the name on the receipt of payment is different from that of the applicant, send a copy of the lease)</li>
              </ol>
              <li>Complete the Application Form FS- 007 (only one form per person) and must attach a copy of the identity card of each of the persons (company officials) who is going to issue the certificate</li>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Form FS - 001</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Form FS - 007</a>
            </div>

          </div>

          <div className="requirements-page__content" id="cert-1">

            <h2>Electronic Signature Certificate for Public Enterprises Representatives</h2>

            <p><strong>Type certificate:</strong> Electronic signature</p>
            <p><strong>Description:</strong>  Authorities Public Enterprise</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 002 (only one form per company) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Publication in the Official Gazette of the creation of the entity</li>
                <li>Publication in the Official Gazette of the last designation of authorities</li>
              </ol>
              <li>Complete the Application Form FS- 007 (only one form per person) and must attach a copy of the identity card of each of the persons (company officials) who is going to issue the certificate.</li>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-002 Registro de Empresas Publicas.pdf">Form FS - 002</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Form FS - 007</a>
            </div>

          </div>

          <div className="requirements-page__content" id="cert-2">

            <h2>Electronic Signature Certificate for Employee Company</h2>

            <p><strong>Type certificate:</strong> Electronic signature</p>
            <p><strong>Description:</strong> Authorities Private Enterprise</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Complete the Application Form FS- 007 (only one form per person) and must attach a copy of the identity card of each of the persons (company officials) who is going to issue the certificate:</li>
              <ol>
                <li>Legible photocopy of the Identity Card</li>
                <li>Copy of R.I.F</li>
              </ol>
              <li>Proof of the Human Resources department, which guarantees the employee to whom the will issue the certificate works for the company</li>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Form FS - 007</a>
            </div>

          </div>

          <div className="requirements-page__content" id="cert-3">

            <h2>Electronic Signature Certificate for Public Officials</h2>

            <p><strong>Type certificate:</strong> Electronic signature</p>
            <p><strong>Description:</strong> Authorities Public Enterprise</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Application Form FS- 002 (only one form per company, institution or Entity) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Copy of the document establishing the company, institution, or Official Gazette of Entity Creation</li>
                <li>Copy of R.I.F</li>
                <li>Copy of the last designation of authorities</li>
                <li>Proof of payment for services, in which the management of the Company, Institution or Ente is clearly indicated. (If the name on the receipt of payment is different from that of the applicant, send a copy of the lease</li>
              </ol>
              <li>Application Form FS- 009 (only one form per person) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Legible photocopy of the Identity Card</li>
                <li>Copy of R.I.F</li>
                <li>Official Gazette Designation public official or certificate number Administrative Career</li>
              </ol>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-002 Registro de Empresas Publicas.pdf">Form FS - 002</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-009 Funcionario Publico.pdf">Form FS - 009</a>
            </div>

          </div>

          <div className="requirements-page__content" id="cert-4">

            <h2>Electronic Signature Certificate for University Graduate</h2>

            <p><strong>Type certificate:</strong> Electronic signature</p>
            <p><strong>Description:</strong> University Graduate</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 006 (only one form per person ) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Legible photocopy of the Identity Card</li>
                <li>Copy of R.I.F</li>
                <li>Copy of the last designation of authorities</li>
                <li>Proof of payment services, which is clearly identified residence address. (If the name on the receipt of payment is different from that of the applicant, send a copy of the lease)</li>
                <li>Copy of university degree in black background</li>
              </ol>
              <li>Proof of the Human Resources department , which guarantees the employee to whom the will issue the certificate works for the company.</li>
              <li>Copy of the registration in the professional association</li>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-006 Registro de Profesional Titulado.pdf">Form FS - 006</a>
            </div>

          </div>

          <div className="requirements-page__content" id="cert-5">

            <h2>Electronic Signature Certificate for Natural Person</h2>

            <p><strong>Type certificate:</strong> Electronic signature</p>
            <p><strong>Description:</strong> Natural Person</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 003 (only one form per person) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Legible photocopy of the Identity Card</li>
                <li>Copy of R.I.F</li>
                <li>Proof of payment services, which is clearly identified residence address. (If the name on the receipt of payment is different from that of the applicant, send a copy of the lease)</li>
                <li>Copy of university degree in black background</li>
              </ol>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-003 Registro de Persona Natural.pdf">Form FS - 003</a>
            </div>

          </div>

          <div className="requirements-page__content" id="sc-0">

            <h2>Electronic Certificate for Secure Server (SSL)</h2>

            <p><strong>Type certificate:</strong> Security</p>
            <p><strong>Description:</strong> Secure Server (SSL)</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 / 4096 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 001 (only one form per company) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Publication in the Official Gazette of the creation of the entity</li>
                <li>Publication in the Official Gazette of the last designation of authorities</li>
              </ol>
              <li>Constancy of Department of Human Resources, which endorses the authorities (to whom the certificate is issued) belong to the company</li>
              <li>Complete the Application Form FS- 005 (only one form per person) and must attach the following information to the form:</li>
              <ol>
                <li>A photocopy of the Identity Card Technical Contact authorized </li>
                <li>Proof of the legal representative of the company where it is established that the equipment belongs and endorse the custodian of the team (Technical Contact)</li>
              </ol>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Form FS - 001</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-005 Registro de Equipos.pdf">Form FS - 005</a>
            </div>

          </div>

          <div className="requirements-page__content" id="sc-1">

            <h2>Electronic Certificate Virtual Private Network (VPN)</h2>

            <p><strong>Type certificate:</strong> Security</p>
            <p><strong>Description:</strong> Virtual Private Network (VPN)</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 / 4096 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 001 (only one form per company) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Publication in the Official Gazette of the creation of the entity</li>
                <li>Publication in the Official Gazette of the last designation of authorities</li>
              </ol>
              <li>Constancy of Department of Human Resources, which endorses the authorities (to whom the certificate is issued) belong to the company</li>
              <li>Complete the Application Form FS- 005 (only one form per person) and must attach the following information to the form:</li>
              <ol>
                <li>A photocopy of the Identity Card Technical Contact authorized </li>
                <li>Proof of the legal representative of the company where it is established that the equipment belongs and endorse the custodian of the team (Technical Contact)</li>
              </ol>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Form FS - 001</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-005 Registro de Equipos.pdf">Form FS - 005</a>
            </div>

          </div>

          <div className="requirements-page__content" id="sc-2">

            <h2>Signing Certificate of Electronic Software</h2>

            <p><strong>Type certificate:</strong> Security</p>
            <p><strong>Description:</strong> Sign of Software</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048  bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 001 (only one form per company) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Copy of the document establishing the company</li>
                <li>Copy of R.I.F</li>
                <li>Copy of software ownership</li>
                <li>Proof of payment of services, which the company is clearly indicated. (If the name on the receipt of payment is different from that of the applicant , send a copy of the lease)</li>
              </ol>
              <li>Application Form FS -0010 (only one form per person) and attach the following information to the form:</li>
              <ol>
                <li>Copy of the Identity Card </li>
                <li>Copy of R.I.F</li>
                <li>Copy of software ownership</li>
              </ol>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Form FS - 001</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-010 Registro de Software.pdf">Form FS - 0010</a>
            </div>

          </div>

          <div className="requirements-page__content" id="sc-3">

            <h2>Electronic Certificate for Logical Access Control</h2>

            <p><strong>Type certificate:</strong> Security</p>
            <p><strong>Description:</strong> Logical Access Control</p>
            <p><strong>Period of validity:</strong> 1 Year</p>
            <p><strong>Key Length:</strong> 2048 bits</p>

            <h3>Requirements</h3>

            <ul>
              <li>Copy budget elaborate and proof of payment made</li>
              <li>Application Form FS- 001 (only one form per company) and attach the following information to the form (only in case of the first application):</li>
              <ol>
                <li>Copy of the document establishing the company</li>
                <li>Copy of R.I.F</li>
                <li>Copy of the last designation of authorities</li>
                <li>Proof of payment of services, which the company is clearly indicated. (If the name on the receipt of payment is different from that of the applicant , send a copy of the lease)</li>
              </ol>
              <li>Constancy of Department of Human Resources, which endorses the authorities (to whom the certificate is issued) belong to the company</li>
              <li>Complete the Application Form FS- 007 (only one form per person) and must attach a copy of the identity card of each of the persons (company officials) who is going to issue the certificate</li>
            </ul>

            <h3>Observations</h3>

            <p>All requeriments must be sent to PROCERT after the payment.</p>
            <p>After receiving the requeriments, it proceeds with step 4 Process Certificate Application.</p>
            <p>To properly display the form save it on your computer and proceed with your reader to open pdf.</p>

            <h3>Shipping methods</h3>

            <p>All documents can be sent directly to the following address: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

            <div className='requirements-page__content-links'>
              <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Form FS - 001</a>
              <Link to={"/en/support"} className="link-back">Back</Link>
              <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Form FS - 007</a>
            </div>

          </div>

        </section>

      </LayoutEN>

    </>
  )
}

export default RequirementsPage