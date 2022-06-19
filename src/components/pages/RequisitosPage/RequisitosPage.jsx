import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import "./RequisitosPage.css"

const RequisitosPage = () => {

  return (
    <>

    {/* Sección optimizable */}
    
    <Layout>

      <section className="requirements-page">

        <h1>Requisitos para Certificados</h1>

        <div className="requirements-page__content" id="cert-0">

          <h2>Certificado de Firma Electrónica para Autoridades de Empresa Privada</h2>

          <p><strong>Tipo de certificado:</strong> Firma Electrónica</p>
          <p><strong>Descripción:</strong> Autoridades de Empresa Privada</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-001(solo un formulario por empresa) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Copia del documento constitutivo de la compañía</li>
              <li>Copia del R.I.F</li>
              <li>Copia de la última designación de las autoridades</li>
              <li>Comprobante de pago de servicios, en el cual se indique claramente la dirección de la empresa. (En caso de que el nombre que aparece en el recibo de pago sea diferente al del solicitante del certificado, enviar copia del contrato de arrendamiento)</li>
            </ol>
            <li>Completar el formulario de solicitud FS-007 (solo un formulario por persona) y debe anexar una copia de la cédula de identidad de cada una de las personas (autoridades de la empresa) a quien se le va a emitir el certificado</li>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Formulario FS - 001</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Formulario FS - 007</a>
          </div>

        </div>

        <div className="requirements-page__content" id="cert-1">

          <h2>Certificado de Firma Electrónica para Autoridades de Empresa Publica</h2>

          <p><strong>Tipo de certificado:</strong> Firma Electrónica</p>
          <p><strong>Descripción:</strong> Autoridades de Empresa Pública</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-002(solo un formulario por empresa) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Publicación en Gaceta Oficial de la creación del ente</li>
              <li>Publicación en Gaceta Oficial de la ultima designación de autoridades</li>
              <li>Copia de la última designación de las autoridades</li>
            </ol>
            <li>Completar el formulario de solicitud FS-007 (solo un formulario por persona) y debe anexar una copia de la cédula de identidad de cada una de las personas (autoridades de la empresa) a quien se le va a emitir el certificado</li>

            <h3>Observaciones</h3>

            <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
            <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
            <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>
          </ul>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-002 Registro de Empresas Publicas.pdf">Formulario FS - 002</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Formulario FS - 007</a>
          </div>

        </div>

        <div className="requirements-page__content" id="cert-2">

          <h2>Certificado de Firma Electrónica para Empleados de Empresas</h2>

          <p><strong>Tipo de certificado:</strong> Firma Electrónica</p>
          <p><strong>Descripción:</strong> Autoridades de Empresa Privada</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-007 (solo un formulario por persona) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Fotocopia legible de la Cédula de Identidad</li>
              <li>Copia del R.I.F</li>
            </ol>
            <li>Constancia de la dirección de Recursos Humanos, donde avale el empleado a quien se la va emitir el certificado trabaja para la empresa</li>

            <h3>Observaciones</h3>

            <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
            <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
            <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>
          </ul>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Formulario FS - 007</a>
          </div>

        </div>

        <div className="requirements-page__content" id="cert-3">

          <h2>Certificado para Funcionario Público</h2>

          <p><strong>Tipo de certificado:</strong> Firma Electrónica</p>
          <p><strong>Descripción:</strong> Autoridades de Empresa Privada</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Formulario de solicitud FS-002 (solo un formulario por Empresa, Institución o Ente) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Copia del documento constitutivo de la Empresa, Institución, Ente o Gaceta Oficial de Creación</li>
              <li>Copia del R.I.F</li>
              <li>Copia de la última designación de las autoridades</li>
              <li>Comprobante de pago de servicios, en el cual se indique claramente la dirección de la Empresa, Institución o Ente. (En caso de que el nombre que aparece en el recibo de pago sea diferente al del solicitante del certificado, enviar copia del contrato de arrendamiento)</li>
            </ol>
            <li>Formulario de solicitud FS-009 (solo un formulario por persona) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Fotocopia legible de la Cédula de Identidad</li>
              <li>Copia del R.I.F</li>
              <li>Gaceta Oficial de Designación del Funcionario Público o número de Certificado de Carrera Administrativa</li>
            </ol>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-002 Registro de Empresas Publicas.pdf">Formulario FS - 002</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-009 Funcionario Publico.pdf">Formulario FS - 009</a>
          </div>

        </div>

        <div className="requirements-page__content" id="cert-4">

          <h2>Certificado de Firma Electrónica para Profesional Titulado</h2>

          <p><strong>Tipo de certificado:</strong> Firma Electrónica</p>
          <p><strong>Descripción:</strong> Profesional Titulado</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-006 (solo un formulario por persona) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Fotocopia legible de la Cédula de Identidad</li>
              <li>Copia del R.I.F</li>
              <li>Comprobante de pagos de servicios, en el cual este claramente identificada la dirección de residencia. (En caso de que el nombre que aparece en el recibo de pago sea diferente al del solicitante del certificado, enviar copia del contrato de arrendamiento)</li>
              <li>Copia del título universitario en fondo negro</li>
            </ol>
            <li>Constancia de la dirección de Recursos Humanos, donde avale el empleado a quien se la va emitir el certificado trabaja para la empresa</li>
            <li>Copia de la inscripción en el colegio profesional</li>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-006 Registro de Profesional Titulado.pdf">Formulario FS - 006</a>
          </div>

        </div>

        <div className="requirements-page__content" id="cert-5">

          <h2>Certificado de Firma Electrónica para Persona Natural</h2>

          <p><strong>Tipo de certificado:</strong> Firma Electrónica</p>
          <p><strong>Descripción:</strong> Persona Natural</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-003 (solo un formulario por persona) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Fotocopia legible de la Cédula de Identidad</li>
              <li>Copia del R.I.F</li>
              <li>Comprobante de pagos de servicios, en el cual este claramente identificada la dirección de residencia. (En caso de que el nombre que aparece en el recibo de pago sea diferente al del solicitante del certificado, enviar copia del contrato de arrendamiento)</li>
            </ol>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-003 Registro de Persona Natural.pdf">Formulario FS - 003</a>
          </div>

        </div>

        <div className="requirements-page__content" id="sc-0">

          <h2>Certificado de Seguridad para Servidor Seguro (SSL)</h2>

          <p><strong>Tipo de certificado:</strong> Seguridad</p>
          <p><strong>Descripción:</strong> Servidor Seguro (SSL)</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 / 4096 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-001(solo un formulario por empresa) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Publicación en Gaceta Oficial de la creación del ente</li>
              <li>Publicación en Gaceta Oficial de la ultima designación de autoridades</li>
            </ol>
            <li>Constancia del Departamento de Recursos Humanos, donde avale que las autoridades (a quien se la va emitir el certificado) pertenecen a la empresa</li>
            <li>Completar el formulario de solicitud FS-005 (solo un formulario por persona) y debe anexar la siguiente información al formulario:</li>
            <ol>
              <li>Fotocopia de la Cédula de Identidad del Contacto Técnico autorizado</li>
              <li>Constancia del representante legal de la empresa donde se establezca que el equipo le pertenece y avale al custodio del equipo (Contacto Técnico)</li>
            </ol>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Formulario FS - 001</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-005 Registro de Equipos.pdf">Formulario FS - 005</a>
          </div>

        </div>

        <div className="requirements-page__content" id="sc-1">

          <h2>Certificado de Seguridad para Red Privada Virtual (VPN)</h2>

          <p><strong>Tipo de certificado:</strong> Seguridad</p>
          <p><strong>Descripción:</strong> Red Privada Virtual (VPN)</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 / 4096 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-001(solo un formulario por empresa) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Publicación en Gaceta Oficial de la creación del ente</li>
              <li>Publicación en Gaceta Oficial de la ultima designación de autoridades</li>
            </ol>
            <li>Constancia del Departamento de Recursos Humanos, donde avale que las autoridades (a quien se la va emitir el certificado) pertenecen a la empresa</li>
            <li>Completar el formulario de solicitud FS-005 (solo un formulario por persona) y debe anexar la siguiente información al formulario:</li>
            <ol>
              <li>Fotocopia de la Cédula de Identidad del Contacto Técnico autorizado</li>
              <li>Constancia del representante legal de la empresa donde se establezca que el equipo le pertenece y avale al custodio del equipo (Contacto Técnico)</li>
            </ol>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Formulario FS - 001</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-005 Registro de Equipos.pdf">Formulario FS - 005</a>
          </div>

        </div>

        <div className="requirements-page__content" id="sc-2">

          <h2>Certificado de Seguridad para Firma de Software</h2>

          <p><strong>Tipo de certificado:</strong> Seguridad</p>
          <p><strong>Descripción:</strong> Firma de Software</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-001(solo un formulario por empresa) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Copia del documento constitutivo de la compañía</li>
              <li>Copia del R.I.F</li>
              <li>Copia del documento de propiedad del software</li>
              <li>Comprobante de pago de servicios, en el cual se indique claramente la dirección de la empresa. (En caso de que el nombre que aparece en el recibo de pago sea diferente al del solicitante del certificado, enviar copia del contrato de arrendamiento)</li>
            </ol>
            <li>Formulario de solicitud FS-0010 (solo un formulario por persona) y anexar la siguiente información al formulario</li>
            <ol>
              <li>Copia de la Cédula de Identidad</li>
              <li>Copia del R.I.F</li>
              <li>Copia del documento de propiedad del software</li>
            </ol>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Formulario FS - 001</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-010 Registro de Software.pdf">Formulario FS - 0010</a>
          </div>

        </div>

        <div className="requirements-page__content" id="sc-3">

          <h2>Certificado de Seguridad para Control de Acceso Lógico</h2>

          <p><strong>Tipo de certificado:</strong> Seguridad</p>
          <p><strong>Descripción:</strong> Control de Acceso Lógico (Autenticación)</p>
          <p><strong>Periodo de validez:</strong> 1 año</p>
          <p><strong>Longitud de la clave:</strong> 2048 bits</p>

          <h3>Requisitos</h3>

          <ul>
            <li>Copia del presupuesto elaborado y constancia del pago realizado</li>
            <li>Formulario de solicitud FS-001(solo un formulario por empresa) y anexar la siguiente información al formulario (solo en caso de ser la primera solicitud):</li>
            <ol>
              <li>Copia del documento constitutivo de la compañía</li>
              <li>Copia del R.I.F</li>
              <li>Copia del la ultima designación de las autoridades</li>
              <li>Comprobante de pago de servicios, en el cual se indique claramente la dirección de la empresa. (En caso de que el nombre que aparece en el recibo de pago sea diferente al del solicitante del certificado, enviar copia del contrato de arrendamiento)</li>
            </ol>
            <li>Constancia del Departamento de Recursos Humanos, donde avale que las autoridades (a quien se la va emitir el certificado) pertenecen a la empresa</li>
            <li>Completar el formulario de solicitud FS-007 (solo un formulario por persona) y debe anexar una copia de la cédula de identidad de cada una de las personas (autoridades de la empresa) a quien se le va a emitir el certificado</li>
          </ul>

          <h3>Observaciones</h3>

          <p>Todos los requisitos deben ser enviados a PROCERT luego de realizado el pago.</p>
          <p>Luego de recibido los requisitos, se procede con el paso 4 del Proceso de Solicitud del Certificado.</p>
          <p>Para visualizar correctamente el formulario guárdelo en su equipo y proceda abrirlo con su lector de pdf.</p>

          <h3>Métodos de envío</h3>

          <p>Toda la documentación puede ser enviada directamente a la siguiente Dirección: Multicentro Empresarial del Este Núcleo B, Torre Libertador, Piso 13, Oficina B-132, Municipio Chacao, Caracas, República Bolivariana de Venezuela - Código postal 1060.</p>

          <div className='requirements-page__content-links'>
            <a href="/documents/formularios/FS-001 Registro de Empresas.pdf">Formulario FS - 001</a>
            <Link to={"/soporte"} className="link-back">Volver</Link>
            <a href="/documents/formularios/FS-007 Registro de Empleado.pdf">Formulario FS - 007</a>
          </div>

        </div>

      </section>
        
    </Layout>

    </>
  )
}

export default RequisitosPage