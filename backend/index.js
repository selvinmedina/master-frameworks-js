'use strict';
var mongoose = require('mongoose');

mongoose.set('useFindAndModify',false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log('La conexion a la base de datos se ha realizado bien!');
});