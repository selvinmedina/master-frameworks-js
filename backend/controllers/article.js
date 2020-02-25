'use strict';

var validator = require('validator');
var Article = require('../models/article');
var fs = require('fs');
var path = require('path');

var controller = {
    datosCurso: (req, res) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'Master en framewors JS',
            autor: 'Selvin Medina',
            correo: 'selvimedina0016@gmail.com',
            hola: hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        // Recoger por post
        var params = req.body;
        
        // Validar datos
        try {
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }

        if (validateTitle && validateContent) {
            // Crear objeto a guardar
            var article = new Article();

            // Asignar valores
            article.title = params.title;
            article.content = params.content;

            if (params.image) {
                article.image = params.image;
            } else {
                article.image = null;
            }

            // Guardar el articulo
            article.save((err, articleStored) => {

                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se ha guardado'
                    });
                }
                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored,
                    message: 'Los datos se han guardado'
                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son validos'
            });
        }
    },

    getArticles: (req, res) => {
        var query = Article.find({});

        var last = req.params.last;
        if (last || last != undefined) {
            query.limit(5);
        }

        query.sort('-_id').exec((err, articles) => {
            // Find
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }

            if (!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar.'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },

    getArticle: (req, res) => {
        // Recoger el id de la url
        var articleId = req.params.id;

        // Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: 'error',
                message: 'No existe el articulo.'
            });
        }
        // Buscar el articulo
        Article.findById(articleId, (err, article) => {
            if (err || !article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el articulo.'
                });

            }
            // Devolverlo
            return res.status(200).send({
                status: 'success',
                article
            });
        });
    },

    update: (req, res) => {
        // Recoger el id del articulo que llega por la url
        var articleId = req.params.id;

        // Recoger los datos que llegan por put
        var params = req.body;

        // Validar datis
        try {
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);

        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar.'
            });
        }

        if (validateTitle && validateContent) {
            // Find and update
            Article.findOneAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar.'
                    });
                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo.'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'La validacion no es correcta.'
            });
        }
    },

    delete: (req, res) => {
        // Recoger el id de la url
        var articleId = req.params.id;

        // Find and delete
        Article.findByIdAndRemove({ _id: articleId }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar.'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista.'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },

    upload: (req, res) => {
        // Configurar el modulo de connect multiparty
        // Recoger el fichero de la peticion
        var fileName = 'Imagen no subida';

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: fileName
            });
        }
        // Conseguir nombre y la extension del archivo
        var filePath = req.files.file0.path;
        var fileSplit = filePath.split('\\');

        // Nombre del archivo
        fileName = fileSplit[2];

        // Extension del fichero
        var extension = fileName.split('\.');
        var fileExt = extension[1];

        // Comprobar la extension, solo imagenes y si no es valida borrar el fichero
        if (fileExt != 'jpg' && fileExt != 'jpeg' && fileExt != 'png' && fileExt != 'gif') {
            // Borrar el archivo subido
            fs.unlink(filePath, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'La extension de la imagen no es valida!'
                });
            });
        } else {
            // Buscar el articulo y asignarle el nombre de la imagen, y borrar la antigua
            var articleId = req.params.id;
            if (articleId) {
                Article.findById(articleId, (err, article) => {
                    if (err || !article) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'No existe el articulo.'
                        });

                    }
                    // Eliminar
                    fs.stat('./upload/articles/' + article.image, (err, status) => {
                        if (!err) {
                            fs.unlink('./upload/articles/' + article.image, (err) => {
                            });
                        }
                    });
                });
                // Si es todo valido
                Article.findOneAndUpdate({ _id: articleId }, { image: fileName }, { new: true }, (err, articleUpdated) => {

                    if (err || !articleUpdated) {
                        return res.status(200).send({
                            status: 'error',
                            message: 'Error al guardar la imagen de articulo.'
                        });
                    }

                    // Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
                    return res.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                });
            } else {
                return res.status(200).send({
                    status: 'success',
                    image: fileName
                });
            }
        }
    },

    getImage: (req, res) => {
        var file = req.params.image;
        var pathFile = './upload/articles/' + file;

        fs.exists(pathFile, (exists) => {
            if (exists) {
                return res.sendFile(path.resolve(pathFile));
            } else {
                return res.status(404).send({
                    status: 'error',
                    message: 'La imagen no existe'
                });
            }
        });
    },

    search: (req, res) => {
        // Sacar el string a buscar
        var searchString = req.params.search;

        // Find or
        Article.find({
            '$or': [
                { 'title': { '$regex': searchString, '$options': 'i' } },
                { 'content': { '$regex': searchString, '$options': 'i' } }
            ]
        })
            .sort([['date', 'descending']])
            .exec((err, articles) => {
                if (!articles || articles.length <= 0) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay articulos relacionados con tu busqueda.'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    articles
                });
            });

    }
};

module.exports = controller;