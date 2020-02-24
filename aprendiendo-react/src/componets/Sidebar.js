import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class Sidebar extends Component {

    searchRef = React.createRef();
    state = {
        search: '',
        redirect: false
    }

    redirectToSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: this.searchRef.current?.value || '',
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            console.log(this.state);
            return (<Redirect to={"/redirect/" + this.state.search}></Redirect>);
        }

        return (
            <aside id="sidebar">
                {!(this.props.blog) &&

                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="" className="btn btn-success">Crear articulo</a>
                    </div>
                }

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscas</p>
                    <form action="" onSubmit={this.redirectToSearch}>
                        <input type="text" name="search" id="" ref={this.searchRef} />
                        <input type="submit" className="btn" value="Buscar" />
                    </form>
                </div>
            </aside>
        );
    }
}

export default Sidebar;