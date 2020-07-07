import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// * EXTERNAL LIBRARY
import { MomentModule } from 'angular2-moment';

// * OWN MODULES
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


// * PIPES
import { EsParPipe } from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PaginaComponent,
    FormularioComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
