import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Global from '../Global';
import Sidebar from "./Sidebar";

//Validacion formularios y alertas

class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    state = {
        article: {},
        status: null
    };
    url = Global.url;

    changeState = async () => {
        await this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    }

    saveArticle = async (e) => {
        e.preventDefault();

        await this.changeState();
        await axios.post(this.url + 'save', this.state.article)
            .then(res => {
                if (res.data.article)
                    this.setState({
                        article: res.data.article,
                        status: 'success'
                    })
                else
                    this.setState({
                        status: 'failed'
                    })
            })
    }

    render() {
        if (this.state.status === 'success')
            return <Redirect to="/blog"></Redirect>

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>
                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" ref={this.titleRef} name="title" onChange={this.changeState} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea type="text" ref={this.contentRef} name="content" onChange={this.changeState}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" />
                        </div>
                        <input type="submit" value="Guardar" className="btn btn-success" />
                    </form>
                </section>
                <Sidebar />
            </div>
        );
    }
}

export default CreateArticle;