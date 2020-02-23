import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {
    nombre: "Selvin Medina",
    favorita: {},
    indice: 0
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

  marcarFavorita = (pelicula, indice) => {
    this.setState({
      favorita: pelicula,
      indice: indice
    });
  }

  render() {
    return (
      <React.Fragment>
        <Slider tittle="Bienvenido al curso de React de Selvin Medina" buttonString={"Ir al blog"} />
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">
              Selección de las peliculas favoritas de: {this.state.nombre}
            </h2>
            <p>
              <button onClick={this.cambiarTitilo}>Cambiar título</button>
            </p>
            {this.state.favorita.titulo ? (
              <p className="favorita" style={
                {
                  background: 'green',
                  color: 'white',
                  padding: '10px'
                }
              }>
                <strong>
                  La película favorita es:
          </strong>
                <span>
                  {' ' + this.state.favorita.titulo}
                </span>
              </p>)
              :
              (
                <p>Hola</p>
              )
            }
            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return <Pelicula
                  key={i}
                  pelicula={pelicula}
                  indice={i}
                  marcarFavorita={this.marcarFavorita}
                />;
              })}
            </div>
          </div>
        </div>
        <Sidebar />
      </React.Fragment>
    );
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.setState(
      {
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
      }
    );
  }

  componentWillUnmount() {
  }
}

export default Peliculas;