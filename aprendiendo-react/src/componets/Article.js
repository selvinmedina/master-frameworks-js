import React, { Component } from "react";
import axios from 'axios';
import Global from '../Global'
import Moment from "react-moment";
import 'moment/locale/es';
import Sidebar from "./Sidebar";
import Helpers from "./Helpers";
import { Link } from "react-router-dom";

class Article extends Component {

    url = Global.url;
    helper = Helpers;
    state = {
        article: null,
        status: null
    }

    componentWillMount = () => this.getArticle();

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id).then(
            res => {
                this.setState(
                    {
                        article: res.data.article,
                        status: 'success'
                    }
                );
            }
        ).catch(err => {
            this.setState(
                {
                    article: null,
                    status: 'failed'
                }
            );
        });
    }

    render() {
        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">
                    {article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {<img src={this.helper.obtenerImagen(article.image || null)} alt={article.title} />}
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow >{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>
                            <Link className="btn btn-danger" to="/blog">Eliminar</Link>
                            <Link className="btn btn-warning" to="/blog">Editar</Link>
                            <div className="clearfix"></div>
                        </article>
                    }
                    {this.state.status === 'failed' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
                            <p>Por favor intentelo de nuevo mas tarde</p>
                        </div>
                    }


                    {this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando</h2>
                            <p> Por favor espere unos segundos</p>
                        </div>

                    }
                </section>
                <Sidebar />
            </div >
        );
    }
}

export default Article;