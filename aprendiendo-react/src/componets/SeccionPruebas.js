import React, { Component } from "react";

class SeccionPruebas extends Component {
  contador = 0;
  state = {
    contador: 0
  };
  // constructor(props){
  //     super(props);
  //     this.state = {
  //         contador: 0
  //     };
  // }

  sumar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  restar() {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <section id="content">
        <h2 className="subheader">Estado</h2>
        <p>Contador: {this.state.contador}</p>
        <input type="button" value="Sumar" onClick={this.sumar} />
        <input type="button" value="Restar" onClick={this.restar.bind(this)} />
      </section>
    );
  }
}

export default SeccionPruebas;
