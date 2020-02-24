import React, { Component } from "react";
import axios from 'axios';
import Global from '../Global'
import Moment from "react-moment";
import 'moment/locale/es';
import { Link } from "react-router-dom";
import Helpers from "./Helpers";

class Articles extends Component {

    url = Global.url;
    state = {
        articles: {},
        status: null
    }
    helper = Helpers;

    componentWillMount() {
        var search = this.props.search || null;
        if (search != null)
            this.getArticles(false, search)
        else if (this.props.home || false)
            this.getArticles(true);
        else
            this.getArticles();
    }

    getArticles = (last = false, search = null) => {
        axios.get(this.url + ((search == null) ? 'articles' + ((last) ? '/last' : '') : 'search/' + search))
            .then(res => {
                if (res.data.articles)
                    this.setState(
                        {
                            articles: res.data.articles,
                            status: res.data.status
                        }
                    );
                else
                    this.setState(
                        {
                            articles: res.data.articles,
                            status: 'failed'
                        }
                    );
            }).catch(err => {
                this.setState(
                    {
                        articles: [],
                        status: 'success'
                    }
                );
            });
    }

    render() {

        if (this.state.articles.length >= 1)
            return <div id="articles">
                {this.state.articles.map((article) => {
                    return <article className="article-item" id="article-template" key={article._id}>
                        <div className="image-wrap">
                            {<img src={this.helper.obtenerImagen(article.image || null)} alt={article.title} />}
                        </div>

                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment locale="es" fromNow >{article.date}</Moment>
                        </span>
                        <Link to={'blog/articulo/' + article._id}>Leer mas</Link>
                        <div className="clearfix"></div>
                    </article>
                })
                }
            </div>;
        else if (this.state.articles.length === 0 && this.state.status === 'success')
            return <div id="articles">
                <h1>No hay articulos para mostrar</h1>
                <p>Todavia no hay contenido en esta seccion.</p>
            </div>;
        else
            return <div id="articles">
                <h1>Cargando...</h1>
                <p>Espere mientras carga el contenido</p>
            </div>;
    }
}

export default Articles;