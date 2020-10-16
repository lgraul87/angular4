import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor() { }
  public items: any = [{

    nombre: "Camiseta",
    talla: "M",
    precio: "10.00 Euros"
  },
  {
    nombre: "Pantalon",
    talla: "M",
    precio: "20.00 Euros"

  },

  {
    nombre: "Sudadera",
    talla: "M",
    precio: "30.00 Euros"

  },

  {
    nombre: "Abrigo",
    talla: "XL",
    precio: "50.00 Euros"

  }

  ];

  public mostrar:boolean;
  ngOnInit(): void {

  }

}
