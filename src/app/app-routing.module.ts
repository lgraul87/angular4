import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { HttpClient } from '@angular/common/http';


const routes: Routes = [

  { path: "inicio", component: InicioComponent },
  { path: "sugerencias", component: SugerenciasComponent },
  { path: "articulos", component: ArticulosComponent },
  { path: "menu", component: MenuComponent },
  { path: "**", redirectTo: "inicio" }

];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
