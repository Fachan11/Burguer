import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor() { }

  usuarios1=[{
    id:1,
    codigo:"SDF463F",
    empresa:"Fabian",
    domicilio:"Carmen Romano",
    correo:"@hotmail.com",
    telefono:"81172739",
    producto:"Pan",
    cantidad:"100 barras",
    marca:"Bimbo"
  },{
    id:1,
    codigo:"S09999",
    empresa:"Carnes San Juan",
    domicilio:"Apodaca",
    correo:"carnesSanJuan@hotmail.com",
    telefono:"7773989",
    producto:"Carnes Frias",
    cantidad:"100 Kg",
    marca:"Baffar"
  }];

   
  
  agregar(usuario2){
    console.log(usuario2);
    // console.log(this.usuarios)
    this.usuarios1.push(usuario2);
  }
  
  ngOnInit() {
  }

}
