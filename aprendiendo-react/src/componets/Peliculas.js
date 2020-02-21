import React, { Component } from "react";

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
  render() {
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader">
          Selección de las peliculas favoritas de: {this.state.nombre}
        </h2>
        <div id="articles" className="peliculas">
            {this.state.peliculas.map((pelicula, i) => {
            return (
                <article className="article-item article-detail">
                <div className="image-wrap">
                    <img src={pelicula.image} alt={pelicula.titulo} />
                </div>

            <h1 className="subheader">{pelicula.titulo}</h1>
                <span className="date">Hace 5 minutos</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                    voluptatum expedita veniam nulla reiciendis debitis unde ducimus
                    similique, impedit explicabo culpa. Voluptate numquam libero
                    dolorum aspernatur vel, incidunt reiciendis laudantium!
                </p>
                <div className="clearfix"></div>
                </article>
            );
            })}
        </div>
      </div>
    );
  }
}

export default Peliculas;
