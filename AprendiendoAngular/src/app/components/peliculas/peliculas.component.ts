import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService, ],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = 'Puente Peliculas';
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date();
    console.log('Constructor lanzado');
  }

  // * HOOK THAT EXCUTES AT THE START OF THE APPLICATION
  ngOnInit(): void {
    console.log('Componente iniciado');
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
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

  // * OUTPUT FUNCTION RECEIVER (BOTH (OUTPUT AND INPUT) MUST HAVE THE SAME NAME TO WORK)
  mostrarFavorita(event): void{
    this.favorita = event.pelicula;
  }
}
