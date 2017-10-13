import {usuario} from './model/usuario';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.less']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  
  usuarios= new usuario();
  oUsuarios= new usuario();
  
    usuarios1=[{
      id:1,
      nombre:"Fabian",
      edad:21,
      domicilio:"Carmen Romano",
      correo:"@hotmail.com",
      nacimiento:"2-Feb-1996",
      puesto:"Gerente",
      usuario:"fvr1",
      contraseña:"vega1"
    },{
      id:2,
      nombre:"Fabian",
      edad:21,
      domicilio:"Carmen Romano",
      correo:"@hotmail.com",
      nacimiento:"2-Feb-1996",
      puesto:"Gerente",
      usuario:"fvr1",
      contraseña:"vega1"
    }];
    
    ngOnInit() {
    }
  
  
    agregar(usuario2){
      console.log(usuario2);
      console.log(this.usuarios)
      this.usuarios1.push(usuario2);
    }
    
    ngAfterViewInit() {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      
    }
  
}
