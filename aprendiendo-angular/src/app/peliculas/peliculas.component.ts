import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;

  constructor() {
    this.titulo = 'Componente de peliculas';
    this.peliculas = [
      new Pelicula('Spiderman 5', 2019, 'https://img.depor.com/files/article_main/uploads/2018/08/28/5b85ce3eaa302.jpeg'),
      new Pelicula('Vengadores', 2020, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-poster-1556056595.jpg?crop=1.00xw:0.352xh;0,0.131xh&resize=480:*'),
      new Pelicula('Batman vs superman', 2030, 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias/el-estreno-de-batman-vs-superman-se-retrasa-a-2016/7331194-3-esl-ES/El-estreno-de-Batman-Vs-Superman-se-retrasa-a-2016.jpg?crop=1xw:0.9803921568627451xh;center,top&resize=480:*')
    ];
  }

  ngOnInit() {
    // console.log('Componente iniciado');
    console.log(this.peliculas);

  }

  ngDoCheck() {
    // console.log('doCheck lanzado');
  }

  cambiarTitulo() {
    // this.titulo = 'El titulo ha sido cambiado';
  }

  ngOnDestroy(): void {
    // console.log('El componente se va a eliminar');
  }

  marcarFavorita(event){
    this.favorita = event.pelicula;
  }
}
