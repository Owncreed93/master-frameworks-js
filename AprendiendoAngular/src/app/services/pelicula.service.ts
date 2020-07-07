import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    holaMundo(): void{
        console.log('Hola mundo desde un servicio de Angular');
    }

    getPeliculas(): Pelicula[] {
        return [
            new Pelicula( 'Spider-Man 4', 2019, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-sony-spiderverso-1567749360.jpeg' ),
            new Pelicula( 'Vengdores: End Game', 2018, 'https://as.com/meristation/imagenes/2019/04/09/noticias/1554800344_323839_1554800388_noticia_normal.jpg' ),
            new Pelicula( 'Batman V Superman', 2015, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/07/batman-v-superman-ultimate-edition.jpg?itok=OzyYHL55' ),
        ];
    }

}
