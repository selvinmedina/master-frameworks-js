import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider tittle="Blog" />
                <div className="center">
                    <div id="content">
                        {/* Listado de articulos que vendran del api */}
                        <Articles />
                    </div>
                </div>
                <Sidebar blog="true" />
            </React.Fragment>
        );
    }
}

export default Blog;