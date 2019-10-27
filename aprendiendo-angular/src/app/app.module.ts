import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MiComponente } from './components/mi-componente/mi-componente.component';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
