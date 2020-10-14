import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NoticiasComponent,
    SugerenciasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
