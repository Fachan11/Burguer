import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor() { }

  usuarios1=[{
    id:1,
    empresa:"Fabian",
    domicilio:"Carmen Romano",
    correo:"@hotmail.com",
    telefono:"81172739",
    producto:"Pan",
    cantidad:"100 barras"
  },{
    id:1,
    empresa:"Carnes San Juan",
    domicilio:"Apodaca",
    correo:"carnesSanJuan@hotmail.com",
    telefono:"7773989",
    producto:"Carnes Frias",
    cantidad:"100 Kg"
  }];

   
  
  agregar(usuario2){
    console.log(usuario2);
    // console.log(this.usuarios)
    this.usuarios1.push(usuario2);
  }
  
  ngOnInit() {
  }

}
