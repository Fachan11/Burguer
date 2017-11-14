import {Usuarios} from './model/usuario';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { LoginService } from './service/login.service';
import { resultadoValidacion } from './model/resultadoValidacion';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],

  providers:[LoginService]
})
export class LoginComponent implements OnInit {

form:FormGroup;
user= new Usuarios();
private resultado = new resultadoValidacion()
  constructor(private login:LoginService, private fb:FormBuilder, private router:Router) { 

    this.form= fb.group({
      nombreUsuario:['',Validators.compose([
        Validators.required
      ])],
      contrasenaUsuario:['',Validators.compose([
        Validators.required
      ])]
    })
  }
  


  ngOnInit( ) {
  }


  logIn(){

//     this.user
// console.log(this.form.value)
    this.login.logindats(this.form.value)
    .subscribe(resp=>{this.resultado= resp ,console.log(this.resultado)
    
console.log("dentro de logIn")
console.log("el resultadeod "+this.resultado.status)
    if(this.resultado.status==1){
      console.log("dentro de logIn pero dentro del if")
      localStorage.setItem("usuario",this.form.controls.nombreUsuario.value)
      this.router.navigate(['/home']);
    }
    },
    error=>{this.resultado=error,console.log("EL"+error)} 
  
  );

  }

  agregar(usuario2){
    console.log(usuario2);
    
  }
  
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

}
