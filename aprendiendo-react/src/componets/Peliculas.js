import React, { Component } from "react";
import Pelicula from "./Pelicula";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QAH09f5lB9OPjTnelohvNq2BQbbcHTJYsTnITl0L1b4MzdVq"
      },
      {
        titulo: "Gran Torino",
        image:
          "https://es.web.img3.acsta.net/pictures/210/096/21009604_20130530232058293.jpg"
      },
      {
        titulo: "Looper",
        image: "https://niels85.files.wordpress.com/2013/01/looper.jpg"
      }
    ],
    nombre: "Selvin Medina"
  };

  cambiarTitilo = () => {
    var { peliculas } = this.state;
    var random = Math.floor(Math.random() * 3);
    alert(random);
    peliculas[random].titulo = "Batman begins";
    this.setState({
      peliculas
    });
  };

  marcarFavorita = (pelicula)=>{
      console.log('marcada favorita:' );
      console.log(pelicula)
  }

  render() {
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">
          Selección de las peliculas favoritas de: {this.state.nombre}
        </h2>
        <p>
          <button onClick={this.cambiarTitilo}>Cambiar título</button>
        </p>
        <p>
          <strong>
              La película favorita es:
          </strong>
          <span>
              X
          </span>
        </p>
        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return <Pelicula
             key={i} 
            pelicula={pelicula}
            marcarFavorita = {this.marcarFavorita}
            />;
          })}
        </div>
      </div>
    );
  }
}

export default Peliculas;
