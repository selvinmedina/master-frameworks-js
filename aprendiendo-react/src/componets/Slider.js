import React, { Component } from "react";

class Slider extends Component {
    render() {
        return (
            <div id="slider" className="slider-big">
                <h1>{this.props.tittle}</h1>
        <a href="#" className="btn-white">{this.props.buttonString}</a>
            </div>
        );
    }
}

export default Slider;