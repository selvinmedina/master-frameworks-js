import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MiComponente from "./componets/MiComponente";
import Peliculas from "./componets/Peliculas";
import Header from "./componets/Header";
import Slider from "./componets/Slider";
import Sidebar from "./componets/Sidebar";
import Footer from "./componets/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <section id="content">
        </section>
        <Sidebar />
      </div>
      <div class="clearfix"></div>
      <Footer />
    </div>
  );
}

export default App;
