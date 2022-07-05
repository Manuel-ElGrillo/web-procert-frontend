import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../src/components/pages/HomePage/HomePage"
import ComprasPage from "../src/components/pages/ComprasPage/ComprasPage"
import EnlacesPage from "../src/components/pages/EnlacesPage/EnlacesPage"
import InformacionPage from "../src/components/pages/InformacionPage/InformacionPage"
import ServiciosPage from "../src/components/pages/ServiciosPage/ServiciosPage"
import SoportePage from "../src/components/pages/SoportePage/SoportePage"
import DocumentacionPage from "../src/components/pages/DocumentacionPage/DocumentacionPage"
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage"

import NosotrosPage from "./components/pages/NosotrosPages/index"

import RequisitosPage from "../src/components/pages/RequisitosPage/RequisitosPage"
import TutorialesPage from "../src/components/pages/TutorialesPage/TutorialesPage"

// Sección en inglés

import HomePageEN from "../src/components/pages/English/HomePageEN"
import PurchasesPage from "../src/components/pages/English/PurchasesPage"
import LinksPage from "../src/components/pages/English/LinksPage/LinksPage"
import InformationPage from "../src/components/pages/English/InformationPage/InformationPage"
import ServicesPage from "../src/components/pages/English/ServicesPage"
import SupportPage from "../src/components/pages/English/SupportPage"
import DocumentationPage from "../src/components/pages/English/DocumentationPage"

import UsPage from "../src/components/pages/English/Us/index"

import RequirementsPage from "../src/components/pages/English/RequirementsPage"
import TutorialsPage from "../src/components/pages/English/TutorialsPages"

import "./App.css"

function App() {
  return (
    <>
    
      <BrowserRouter>

        <Routes>

          {/* Rutas Principales */}

          <Route path="/" element={<HomePage/>}/>
          <Route path="/compras" element={<ComprasPage/>}/>
          <Route path="/enlaces" element={<EnlacesPage/>}/>
          <Route path="/informacion" element={<InformacionPage/>}/>
          <Route path="/servicios" element={<ServiciosPage/>}/>
          <Route path="/soporte" element={<SoportePage/>}/>
          <Route path="/documentacion" element={<DocumentacionPage/>}/>
          <Route path="*" element={<NotFoundPage title="404 Not Found"
                                                 href={"/"}
                                                 linkText="Volver"/>}/>

          {/* Rutas secundarias */}

          <Route path="/nosotros" element={<NosotrosPage/>}/>

          <Route  path="/requisitos" element={<RequisitosPage/>}/>
          <Route  path="/tutoriales" element={<TutorialesPage/>}/>

          {/* Rutas Sección en Inglés */}

          <Route path="/en" element={<HomePageEN/>}/>
          <Route path="/en/purchases" element={<PurchasesPage/>}/>
          <Route path="/en/links" element={<LinksPage/>}/>
          <Route path="/en/information" element={<InformationPage/>}/>
          <Route path="/en/services" element={<ServicesPage/>}/>
          <Route path="/en/support" element={<SupportPage/>}/>
          <Route path="/en/documentation" element={<DocumentationPage/>}/>
          <Route path="/en/us" element={<UsPage/>}/>
          <Route path="/en/requirements" element={<RequirementsPage/>}/>
          <Route path="/en/tutorials" element={<TutorialsPage/>} />

        </Routes>
        
      </BrowserRouter>
    
    </>
  );
}

export default App;
