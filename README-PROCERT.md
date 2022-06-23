# Scripts de aplicación de web PROCERT

## Script para correr en servidor local

    "npm start"

La aplicación se abrirá en el navegador predeterminado en el puerto 3000 (http://localhost:3000)

## Script para crear build para producción

    "npm run build"

# Dependencias utilizadas para la web PROCERT

    1) React Router DOM v6 (Navegación)
    2) React Router HashLink (Navegación con ids # en URLs)
    3) Swiper (Sección de desplazamiento de recuadros de la HomePage)

# El componente principal App.jsx

Este componente posee el ruteo y todos los componentes de la web. Su función es cargar los componentes "Page" según sean llamados dentro de la web

# Paginación y Componentes

Todas las páginas, principales y secundarias, se encuentran dentro del fichero "src/components/pages"

Cada página se comporta como un componente individual dentro de la web, a su vez estas contienen componentes individuales que cumplen una función específica dentro de cada "Page"

## ComprasPage

Sección estática con información de compras de la web

## DocumentacionPage

Sección construida con la información del fichero "data/documents" donde se pueden descargar las gacetas, certificados y contratos

## EnlacesPage

Sección construida con la información del fichero "data/ac-procert" para la descarga y consulta de documentos

### Componente OCSP

Componente construido de forma estática que muestra información dentro del componente EnlacesPage

## HomePage

Componente construido con varias de las dependencias y sub componentes del proyecto

Se puede consultar la documentación de Swiper en "https://swiperjs.com/react"

La información mostrada en la vista se construyó de forma estática

### SecundaryNavBar

Componente ubicado en el HomePage. Barra de navegación que permite ir de forma directa a las secciones de requisitos (RequisitosPage), tutoriales (TutorialesPage) y FAQs (InformacionPage). También posee enlaces que dirigen al usuario a la URL del certificado raíz SUSCERTE y a la Lista de certificados revocados

## InformacionPage

Sección construida con sub componentes (FAQ, Firmas, Gestion, SSL)

### FAQ

Cada pregunta utiliza un estado que por defecto es "false" para no ser mostrada en pantalla hasta que el usuario haga click sobre la pregunta

Para que el estado de esta pregunta cambie a "true" se hizo una función por cada pregunta

    handleAnswer#()

que funciona como un toggle que cambia entre ambos estados, lo cual permite montar y desmontar la información de la respuesta de cada pregunta

Cada respuesta está guardada dentro de una variable en el mismo componente para esta función

Para que las respuestas no sean mostradas en la vista apenas cargue el componente se tiene un bloque condicional en la variable de la respuesta que por defecto está en "null" si el estado es "false"

### Firmas

Sub componente construido de forma estática que se encuentra dentro del componente InformationPage

### Gestion

Sub componente construido de forma estática que se encuentra dentro del componente InformationPage

### SSL

Sub componente construido de forma estática que se encuentra dentro del componente InformationPage

## NosotrosPage

Secciones construidas de forma estática que se encuentran ubicadas en el componente Footer

Cuenta con:
-HSMPage
-MisionPage
-ValoresPage
-VisionPage

## NotFoundPage

Sección estática construida en caso de que el usuario acceda a una URL inexistente en la página web

El componente recibe tres propiedades (href, link, linkText) que vienen desde el componente principal App.jsx

## RequisitosPage

Sección construida de forma estática que recibe las URLs con hash (#) para la navegación inmediata del usuario desde la sección de soporte (SoportePage) 

## ServiciosPage

Componente construido de forma estática. Los recursos de esta sección son traídos del fichero assets de la web

## SoportePage

Sección construida en cuatro partes (dinámicas y estáticas)

    1)El soporte técnico: compuesto de siete cards (Componente SoporteCard) que recibe propiedades desde SoportePage para rellenar su información

    2)Manuales: sección construida con la información del fichero "data/documents/manuales.js"

    3)Banner: componente que conduce al usuario a la sección de tutoriales de la web de PROCERT

    4)Requisitos: sección construida de forma dinámica con la información del fichero "data/certifications" 

## TutorialesPage

Componente con un estado inicial que muestra por defecto el video tutorial "Certificado Electrónico"

Cada botón cambia el estado del componente principal (TutorialesPage) con una función onClick={handleTutorial#} que permite cambiar el código embebido de la etiqueta iframe

## CTA 

Componente Call To Action utilizado en diferentes secciones de la web para realizar consultas o descargas de archivos

El componente CTA recibe dos propiedades que permiten modificar el texto (text) y el link (href) a donde va a ser dirigido el usuario

## Layout

Componente compuesto por dos componentes (Header y Footer) que se encuentran por toda la web para una fácil implementación y navegación

### Header

Componente de la barra de navegación superior de la web. En este se utiliza la dependencia del React Router DOM para la navegación principal de la web

Cada link (NavLink) posee estilos condicionales que permite al usuario identificar visualmente en la barra de navegación en cuál sección se encuentra

### Footer

Componente dentro del layout principal que muestra información estática con contenido extra sobre PROCERT. También contiene enlaces hacia sus redes sociales y sub componentes provenientes del fichero "NosotrosPage"

## Arhivos, documentos e imágenes

### public

En este fichero se encuentran los documentos y archivos estáticos de la web, como archivos .PDF y .ZIP

Cada archivo .PDF está subdividido en subficheros respectivamente identificados para su sección: 

-Declaración de prácticas de certificación
-Formularios
-Gacetas
-Manuales
-Modelo de contrato
-Factura electrónica

El fichero "downloads" contiene el archivo de descarga Open-SSL.zip

### assets

Contiene las imágenes y videos mostradas en la web de PROCERT

### data

Contiene arreglos de objetos tipo JSON iterables para la construcción de listados de componentes de las secciones de:

-Documentación (DocumentacionPage)
-Enlaces de Interés (EnlacesPage)
-Soporte (SoportePage)

## Estilos

Archivos .css ubicados dentro del mismo fichero de los componentes. Cada componente posee su propio archivo de estilos nombrados de la misma forma

La web posee estilos globales que afectan a la fuente de la web y variables para identificar los colores de la web de la empresa