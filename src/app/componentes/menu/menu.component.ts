import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public item1: any = {
    nombre: "Pagina inicial",
    ruta: "inicio"
  };
  ngOnInit(): void {
  }

}
