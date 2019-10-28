import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { MiComponente } from './components/mi-componente/mi-componente.component';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
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
import { EsParPipe } from './pipes/espar.pipes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
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
    EsParPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
