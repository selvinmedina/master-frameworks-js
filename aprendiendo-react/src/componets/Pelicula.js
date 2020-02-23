import React, { Component } from "react";

class Pelicula extends Component {
  marcar = () => {
    this.props.marcarFavorita(this.props.pelicula, this.props.indice);
  }

  render() {
    const pelicula = this.props.pelicula;
    const { titulo, image } = this.props.pelicula;

    return (
      <article className="article-item article-detail">
        <div className="image-wrap">
          <img src={image} alt={titulo} />
        </div>

        <h1 className="subheader">{titulo}</h1>
        <span className="date">Hace 5 minutos</span>
        <button onClick={this.marcar}>
          Marcar como favorita
        </button>
        <div className="clearfix"></div>
      </article>
    );
  }
}

export default Pelicula;
