import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Search extends Component {
    render() {
        var busqueda = this.props.match.params.search || '';

        return (
            <React.Fragment>
                <Slider tittle={'Busqueda: ' + busqueda} />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del api */}
                        <Articles search={busqueda} />
                    </div>
                </div>
                <Sidebar blog="true" />
            </React.Fragment>
        );
    }
}

export default Search;