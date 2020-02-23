import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <img src={logo} alt="Logotipo" className="app-logo" />
                        <span id="brand">
                            <strong>Curso</strong> React
                    </span>
                    </div>

                    {/*comentario*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName="active" >Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas">Peliculas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/1/Selvin">Pagina 2</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header >
        );
    }
}

export default Header;