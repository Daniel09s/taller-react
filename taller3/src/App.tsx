import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wizard from './pages/Wizard';
import Resumen from './pages/Resumen';
import FinApp from './pages/FinApp';
import Paso1 from './components/Paso1';
import Paso2 from './components/Paso2';
import Paso3 from './components/Paso3';
import Paso4 from './components/Paso4';
import Paso5 from './components/Paso5';
//Navegar cuando finalice el formulario

function App() {

  return (

  
    <Router>
      <Routes>
        <Route path="/" element={<Wizard />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/finApp" element={<FinApp />} />

        //pasos 1-5
        <Route path="/paso1" element={<Paso1 />} />
        <Route path="/paso2" element={<Paso2 />} />
        <Route path="/paso3" element={<Paso3 />} />
        <Route path="/paso4" element={<Paso4 />} />
        <Route path="/paso5" element={<Paso5 />} />
      </Routes>
    </Router>
  )
}

export default App;
