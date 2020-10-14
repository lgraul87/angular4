import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';

const routes: Routes =[

  {path:"inicio", component: InicioComponent},
  {path: "noticias", component: NoticiasComponent},
  {path: "sugerencias", component: SugerenciasComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
