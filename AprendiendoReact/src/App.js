import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// * IMPORT OUR OWN COMPONENTS
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';


function HolaMundo(nombre, edad=27){
  let presentacion = <div>Hola soy {nombre} <h3>Tengo {edad} años</h3></div>;
  return presentacion;
}

function App() {
  let nombre = 'Christian Tarifeño';
  let edad = 27;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {HolaMundo(nombre, edad)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section className="componentes">
        <MiComponente />
        <Peliculas/>
      </section>
    </div>
  );
}

export default App;
