import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Slider extends Component {
    render() {
        return (
            <div id="slider" className={'slider-' + (this.props.buttonString ? 'big' : 'small')}>
                <h1>{this.props.tittle}</h1>
                {this.props.buttonString &&
                    <NavLink to="/blog" className="btn-white">{this.props.buttonString}</NavLink>
                }
            </div>
        );
    }
}

export default Slider;