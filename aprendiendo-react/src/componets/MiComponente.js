import React, { Component } from "react";

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        };

        return (
            <React.Fragment>
                <h1>Receta: {receta.nombre}</ h1>
                <h2>Calorias: {receta.calorias}</h2>
                <ul>
                    {
                        receta.ingredientes.map((ingrediente, i) => <li key={i}> {ingrediente}</li>)
                    }
                </ul>
            </React.Fragment >
        );
    }
}

export default MiComponente;