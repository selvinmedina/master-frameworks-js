import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <section id="content">
                <h2 className="subheader">Página no encontrada</h2>
                <p>
                    La pagina a la que esta intentando acceder no existe.
                </p>
            </section>
        );
    }
}

export default Error;