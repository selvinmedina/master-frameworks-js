import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculaService } from '../services/peliculas.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = 'Componente de peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit() {
    // console.log('Componente iniciado');
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
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

  marcarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
