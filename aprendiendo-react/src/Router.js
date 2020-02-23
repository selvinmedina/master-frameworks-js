import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MiComponente from "./componets/MiComponente";
import Error from "./componets/Error";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Home from "./componets/Home"
import Blog from "./componets/Blog"
import Peliculas from "./componets/Peliculas"
import Formulario from './componets/Formulario';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/pruebas/:id/:nombre/:apellido?" render={(props) => {
                        return (<h1>
                            {props.match.params.nombre + ' '}
                            {props.match.params?.apellido}

                        </h1>)
                    }} />
                    <Route exact path="/pagina-1" render={
                        () => {
                            return (<React.Fragment>
                                <h1>Hola mundo desde el router</h1>
                                <MiComponente saludo="Hola mundo" />
                            </React.Fragment>)
                        }
                    } />
                    <Route component={Error} />
                </Switch>

                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter >
        );
    }
}

export default Router;