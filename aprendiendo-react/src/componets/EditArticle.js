import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Global from '../Global';
import Sidebar from "./Sidebar";
import SimpleReactValidator from "simple-react-validator";
import swal from 'sweetalert';
import Helpers from "./Helpers";

//Validacion formularios y alertas

class EditArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();
    articleId = null;
    helper = Helpers;
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

    componentWillMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle();
        console.log(this.articleId);
    }

    getArticle = () => {
        axios.get(this.url + 'article/' + this.articleId)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            }).catch(err => {
                console.log(err);

            });
    }

    changeState = async () => {
        await this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = async (e) => {
        e.preventDefault();

        await this.changeState();
        if (this.validator.allValid())
            await axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {
                    if (res.data.article) {
                        swal('Articulo Editado', 'El articulo ha sido creado correctamente', 'success');
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
        var article = this.state.article;

        if (this.state.status === 'success')
            return <Redirect to="/blog"></Redirect>

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar Articulo</h1>
                    {this.state.article.title &&
                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" ref={this.titleRef} defaultValue={article.title} name="title" onChange={this.changeState} />
                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea type="text" ref={this.contentRef} defaultValue={article.content} name="content" onChange={this.changeState}></textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>
                            {<img src={this.helper.obtenerImagen(article.image || null)} alt={article.title} width="300px" className="image-thumb" />}
                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" onChange={this.fileChange} name="file0" />
                            </div>
                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>
                    }

                    {!this.state.article.title &&
                        <h2 className="subheader">Cargando...</h2>
                    }
                </section>
                <Sidebar />
            </div>
        );
    }
}

export default EditArticle;