import {usuario} from './model/usuario';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup , FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.less']
})
export class EmpleadosComponent implements OnInit {
  form:FormGroup;

  constructor(
    private fb:FormBuilder) { 
      this.form= fb.group({
        nombre:['',Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
          
        ])],
        apellidos:['',Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(25),
          
        ])],
        edad:['',Validators.compose([
          Validators.pattern("[0-9]{2}"),
          Validators.required,
          
          Validators.min(9),
          Validators.max(99),
        ])],
        domicilio:['',Validators.compose([
          Validators.required,
          
          Validators.minLength(10),
          Validators.maxLength(50),
        ])],
        correo:['',Validators.compose([
          Validators.required
        ])],

        nacimiento:['',Validators.compose([
          Validators.required
        ])],
        puesto:['',Validators.compose([
          Validators.required
        ])],
        usuario:['',Validators.compose([
          Validators.required,
          
          Validators.minLength(6),
          Validators.maxLength(15),
        ])],
        contrasena:['',Validators.compose([
          Validators.required,
          
          Validators.minLength(6),
          Validators.maxLength(15),
        ])],
        
      })
    }

  
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
