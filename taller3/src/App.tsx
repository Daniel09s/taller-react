import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wizard from './pages/Wizard';
import Resumen from './pages/Resumen';
import FinApp from './pages/FinApp';
//Navegar cuando finalice el formulario

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wizard />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/finApp" element={<FinApp />} />
      </Routes>
    </Router>
  )
}

export default App;
