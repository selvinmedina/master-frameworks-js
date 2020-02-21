import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import  MiComponente  from "./componets/MiComponente";

function App() {
  var nombre = 'Selvin Medina';
  function holaMundo(nombre, edad){
    
    return (<div>
            <h2>Hola soy {nombre}</h2>
            <h3>Tengo {edad} años</h3>
           </div>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo jaja edutad
        </p>
        {holaMundo(nombre, 19)}
        <section className="componentes">
        <MiComponente/>
        </section>
      </header>
    </div>
  );
}

export default App;
