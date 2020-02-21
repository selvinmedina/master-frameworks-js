import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from "./componets/MiComponente";
import Peliculas from "./componets/Peliculas";
import Header from "./componets/Header";
import Slider from "./componets/Slider";

function App() {
  var nombre = 'Selvin Medina';
  function holaMundo(nombre, edad) {

    return (<div>
      <h2>Hola soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>);
  }

  return (
    <div className="App">
      <Header />
      <Slider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo jaja edutad
        </p>
        {holaMundo(nombre, 19)}
        <section className="componentes">
          <MiComponente />
          <Peliculas />
        </section>
      </header>
    </div>
  );
}

export default App;
