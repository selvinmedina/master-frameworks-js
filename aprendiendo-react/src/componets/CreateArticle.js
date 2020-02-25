import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Global from '../Global';
import Sidebar from "./Sidebar";
import SimpleReactValidator from "simple-react-validator";
import swal from 'sweetalert';

//Validacion formularios y alertas

class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    validator = new SimpleReactValidator({
        messages: {
            required: 'Este campo es requerido.'
        }
    })
    state = {
        article: {},
        status: null,
        imagenSeleccionada: null
    };
    url = Global.url;

    changeState = async () => {
        await this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = async (e) => {
        e.preventDefault();

        await this.changeState();
        if (this.validator.allValid())
            await axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });
                        //Subir la imagen
                        if (this.state.imagenSeleccionada != null) {
                            const formData = new FormData();
                            formData.append(
                                'file0',
                                this.state.imagenSeleccionada,
                                this.state.imagenSeleccionada.name,
                            );

                            axios.post(this.url + 'upload-image/' + this.state.article._id,
                                formData
                            ).then(res => {
                                if (res.data.article) {
                                    this.setState({
                                        article: res.data.article,
                                        status: 'success'
                                    });
                                    swal('Articulo Creado', 'El articulo ha sido creado correctamente', 'success');
                                }
                                else
                                    this.setState({
                                        article: res.data.article,
                                        status: 'failed'
                                    });
                            });
                        }
                        else
                            this.setState({
                                status: 'success'
                            })
                    }
                    else
                        this.setState({
                            status: 'failed'
                        })
                });
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    fileChange = async (e) => {
        console.log(e);
        await this.setState({
            imagenSeleccionada: e.target.files[0]
        });

        console.log(this.state.imagenSeleccionada);

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
                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea type="text" ref={this.contentRef} name="content" onChange={this.changeState}></textarea>
                            {this.validator.message('content', this.state.article.content, 'required')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" onChange={this.fileChange} name="file0" />
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