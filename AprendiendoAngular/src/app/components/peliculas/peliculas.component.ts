import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;

  constructor() {
    this.titulo = 'Puente Peliculas';
    this.peliculas = [
      new Pelicula( 'Spider-Man 4', 2019, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-sony-spiderverso-1567749360.jpeg' ),
      new Pelicula( 'Vengdores: End Game', 2018, 'https://as.com/meristation/imagenes/2019/04/09/noticias/1554800344_323839_1554800388_noticia_normal.jpg' ),
      new Pelicula( 'Batman V Superman', 2015, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/07/batman-v-superman-ultimate-edition.jpg?itok=OzyYHL55' ),
    ]
    console.log('Constructor lanzado');
  }

  // * HOOK THAT EXCUTES AT THE START OF THE APPLICATION
  ngOnInit(): void {
    console.log('Componente iniciado');
    console.log(this.peliculas);
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
