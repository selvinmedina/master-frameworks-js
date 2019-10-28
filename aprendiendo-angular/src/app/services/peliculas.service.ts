import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula('Spiderman 5', 2019, 'https://img.depor.com/files/article_main/uploads/2018/08/28/5b85ce3eaa302.jpeg'),
            new Pelicula('Vengadores', 2020, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-poster-1556056595.jpg?crop=1.00xw:0.352xh;0,0.131xh&resize=480:*'),
            new Pelicula('Batman vs superman', 2030, 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias/el-estreno-de-batman-vs-superman-se-retrasa-a-2016/7331194-3-esl-ES/El-estreno-de-Batman-Vs-Superman-se-retrasa-a-2016.jpg?crop=1xw:0.9803921568627451xh;center,top&resize=480:*')
        ]
    }

    holaMundo() {
        return 'Hola mundo desde un servicio de angular';
    }

    getPeliculas() {
        return this.peliculas;
    }
}