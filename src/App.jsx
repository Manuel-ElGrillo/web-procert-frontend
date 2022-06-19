import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../src/components/pages/HomePage/HomePage"
import ComprasPage from "../src/components/pages/ComprasPage/ComprasPage"
import EnlacesPage from "../src/components/pages/EnlacesPage/EnlacesPage"
import InformacionPage from "../src/components/pages/InformacionPage/InformacionPage"
import ServiciosPage from "../src/components/pages/ServiciosPage/ServiciosPage"
import SoportePage from "../src/components/pages/SoportePage/SoportePage"
import DocumentacionPage from "../src/components/pages/DocumentacionPage/DocumentacionPage"
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage"

import HSMPage from "./components/pages/NosotrosPages/HSMPage"
import MisionPage from "./components/pages/NosotrosPages/MisionPage"
import ValoresPage from "./components/pages/NosotrosPages/ValoresPage"
import VisionPage from "./components/pages/NosotrosPages/VisionPage"

import RequisitosPage from "../src/components/pages/RequisitosPage/RequisitosPage"
import TutorialesPage from "../src/components/pages/TutorialesPage/TutorialesPage"
import SistemaARPage from "../src/components/pages/SistemaARPage/SistemaARPage"

import EnHomePage from "./components/pages/english/EN-HomePage/EnHomePage"

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
          <Route path="*" element={<NotFoundPage title="Página no encontrada"
                                                 href={"/"}
                                                 linkText="Volver"/>}/>

          {/* Rutas secundarias */}

          <Route path="/mision" element={<MisionPage/>}/>
          <Route path="/vision" element={<VisionPage/>}/>
          <Route path="/valores" element={<ValoresPage/>}/>
          <Route path="/hsm" element={<HSMPage/>}/>

          <Route  path="/requisitos" element={<RequisitosPage/>}/>
          <Route  path="/tutoriales" element={<TutorialesPage/>}/>

          <Route path="/sistemaAR" element={<SistemaARPage/>}/>

          {/* Rutas de la versión en inglés */}

          <Route path="/en" element={<EnHomePage/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
