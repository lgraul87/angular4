import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public items: any = [{

    nombre: "Pagina inicial",
    ruta: "inicio"
  },
  {
    nombre: "Pagina de noticias",
    ruta: "noticias"
  },

  {
    nombre: "Pagina de articulos",
    ruta: "articulos"
  },

  {
    nombre: "Pagina de sugerencias",
    ruta: "sugerencias"
  }

  ];
  ngOnInit(): void {
  }

}
