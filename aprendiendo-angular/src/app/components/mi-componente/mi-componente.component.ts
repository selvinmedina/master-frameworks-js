import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente {
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPelicula: boolean;

    constructor() {
        console.log('Componente mi-componente cargado!');
        this.titulo = 'Hola mundo desde mi componente';
        this.comentario = 'Holaa';
        this.mostrarPelicula = true;
        this.year = 2020;

        console.log(this.titulo);
        console.log(this.comentario);
        console.log(this.year);
    }

    ocultarPelicula() {
        this.mostrarPelicula = false;
    }
}