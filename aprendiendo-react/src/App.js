import React from 'react';
import './assets/css/App.css';
import Header from "./componets/Header";
import Slider from "./componets/Slider";
import Sidebar from "./componets/Sidebar";
import Footer from "./componets/Footer";
import SeccionPruebas from "./componets/SeccionPruebas";
import Peliculas from "./componets/Peliculas";

function App() {
  var buttonString = "Ir al blog";
  return (
    <div className="App">
      <Header />
      <Slider tittle="Bienvenido al curso de React de Selvin Medina" buttonString = {buttonString}/>
      <div className="center">
        <section id="content">
          <Peliculas/>
        </section>
        <Sidebar />
      </div>
      <div className="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
