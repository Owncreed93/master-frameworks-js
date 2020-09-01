import React from 'react';
import './assets/css/App.css';

// * IMPORT OUR OWN COMPONENTS
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';


function App() {

  let buttonString = "Ir al blog"
  
  return (
    <div className="App">
      <Header />
      <Slider 
              title="Bienvenido al curso de React con V&iacute;ctor Robles de victorroblesweb.es"
              btn={buttonString}
      />
      
      <div className="center">


        <Peliculas/>

        <Sidebar />

        {/* CLEAN FLOATS */}
        <div className="clearfix"></div>

      </div>

      <Footer />            
    </div>
  );
}

export default App;
