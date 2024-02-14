import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Paginas/HomePage';
import { CarPage } from './Paginas/CarPage';
import { TrackingPage } from './Paginas/TrackingPage';
import { NavigationMenu } from './Componentes/NavigationMenu/NavigationMenu';
import { Footer } from './Componentes/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <NavigationMenu /> 
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/CarPage" element={<CarPage />} />
        <Route path="/TrackingPage" element={<TrackingPage />} />
      </Routes>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
