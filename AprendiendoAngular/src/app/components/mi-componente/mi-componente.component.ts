import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
})

export class MiComponenteComponent{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){

        this.titulo = 'Hola Mundo, soy MI COMPONENTE';
        this.comentario = 'Este es mi primer componente';
        this.year = 2020;
        this.mostrarPeliculas = true;

        console.log(`Componente ${this} cargado !!!`);
        console.log(this.titulo);
        console.log(this.comentario);
        console.log(this.year);
    }

    ocultarPeliculas(): void {
        this.mostrarPeliculas = false;
    }

}
