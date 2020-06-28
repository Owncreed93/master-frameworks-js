import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;

  constructor() {
    this.titulo = 'Puente Peliculas';
    console.log('Constructor lanzado');
  }

  // * HOOK THAT EXCUTES AT THE START OF THE APPLICATION
  ngOnInit(): void {
    console.log('Componente iniciado');
  }

  // * HOOK THAT EXECUTES WHENEVER SOMETHING CHANGES
  ngDoCheck(): void{
    console.log('DOCHECK LANZADO');
  }

  cambiarTitulo(): void {
    this.titulo = 'El titulo ha sido cambiado!!!';
  }

  // * HOOK THAT DESTROYS
  ngOnDestroy(): void{
    console.log('THIS IS DESTROYED');
  }

}
