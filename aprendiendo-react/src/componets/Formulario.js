import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    biografiaRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();
    state = {
        user: {}
    }
    recibirFormulario = (e) => {
        e.preventDefault();

        let user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value,
            biografia: this.biografiaRef.current.value,
            genero: ((this.generoHombreRef.current.checked) ? this.generoHombreRef.current.value :
                (this.generoMujerRef.current.checked) ? this.generoMujerRef.current.value :
                    (this.generoOtroRef.current.checked) ? this.generoOtroRef.current.value : '')
        }

        this.setState({
            user: user
        });

        console.log('Formulaio enviado');
        console.log(this.nombreRef.current.value);
        console.log(this.apellidoRef.current.value);
        console.log(this.biografiaRef.current.value);
        console.log(user.genero);

    }

    render() {
        const user = this.state.user;
        return (
            <React.Fragment>
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>
                        {(user.nombre ||
                            user.apellido ||
                            user.biografia ||
                            user.genero) &&

                            <div id="user-data">
                                {this.state.user.nombre && (
                                    <p>
                                        <strong>Nombre:</strong> <span>{user.nombre}</span>
                                    </p>
                                )}

                                {user.apellido &&
                                    <p>
                                        <strong>Apellido: </strong> <span>{user.apellido}</span>
                                    </p>
                                }

                                {user.biografia &&
                                    <p>
                                        <strong>Biografia: </strong> <span>{user.biografia}</span>
                                    </p>
                                }

                                {user.genero &&
                                    <p>
                                        <strong>Genero: </strong> <span>{user.genero}</span>
                                    </p>
                                }
                            </div>
                        }
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="name" id="" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellido">Apellidos</label>
                                <input type="text" name="apellido" ref={this.apellidoRef} id="" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.biografiaRef} id=""></textarea>
                            </div>

                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" ref={this.generoHombreRef} id="" value="Hombre" />Hombre
                                <input type="radio" name="genero" ref={this.generoMujerRef} id="" value="Mujer" />Mujer
                                <input type="radio" name="genero" ref={this.generoOtroRef} id="" value="Otro" />Otro
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </div>
                </div>
                <Sidebar />
            </React.Fragment >
        );
    }
}

export default Formulario;