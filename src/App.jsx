import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gabinete from "./pages/Gabinete";
import Sobremi from "./pages/Sobremi";
import Contacto from "./pages/Contacto";
import Libro from "./pages/Libro";
import Curso1 from "./pages/cursos/Curso1";
import Curso2 from "./pages/cursos/Curso2";
import Curso3 from "./pages/cursos/Curso3";
import CursoEspecial from "./pages/cursos/CursoEspecial";

import NavBoot from "./components/NavBoot";

 
 

function App() {
  return (
    <div className="App">
      <Router>
        <NavBoot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/gabinete" element={<Gabinete />} />
          <Route path="/hayotramaneradevivir" element={<Libro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/curso1" element={<Curso1 />} />
          <Route path="/curso2" element={<Curso2 />} />
          <Route path="/curso3" element={<Curso3 />} />
          <Route path="/cursoespecial" element={<CursoEspecial />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
