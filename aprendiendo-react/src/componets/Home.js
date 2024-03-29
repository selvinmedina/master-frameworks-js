import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider tittle="Bienvenido al curso de React de Selvin Medina" buttonString={"Ir al blog"} />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos articulos</h1>
                        <Articles home={true} />
                    </div>
                </div>
                <Sidebar />
            </React.Fragment>
        );
    }
}

export default Home;