import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = 'Componente de peliculas';
    console.log('Constructor lanzado');
  }

  ngOnInit() {
    console.log('Componente iniciado');
  }

  ngDoCheck() {
    console.log('doCheck lanzado');
  }

  cambiarTitulo() {
    this.titulo = 'El titulo ha sido cambiado';
  }

  ngOnDestroy(): void {
    console.log('El componente se va a eliminar');
  }
}
