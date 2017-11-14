import {usuario} from './model/usuario';
import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PromocionesGenerales } from '../../models/promocionesGenerales';
import { PromocionesserviceService } from '../../services/promocionesservice.service';
import * as $ from 'jquery';
import { resultadoValidacion } from '../login/model/resultadoValidacion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.less']
})
export class CotizacionesComponent implements OnInit {
  form:FormGroup;
  promociones:PromocionesGenerales;
  resultado:resultadoValidacion;

  constructor(private service:PromocionesserviceService, private fb:FormBuilder, private router:Router) {

    this.form= fb.group({
      nombreCliente:['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        
      ])],
      apellidoCliente:['',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        
      ])],
      telefonoCliente:['',Validators.compose([
        Validators.required,
        
        Validators.minLength(10),
        Validators.maxLength(50),
      ])],
      direccionCliente:['',Validators.compose([
        Validators.required,
        
        Validators.minLength(10),
        Validators.maxLength(50),
      ])],
      idPromocion:['',Validators.compose([
        Validators.required
      ])],

      fechaPedido:['',Validators.compose([
        Validators.required
      ])],
      fechaEntrega:['',Validators.compose([
        Validators.required
      ])],
     
      
    })
   }

obtenerPromociones(){
  this.service.obtenerPromocionesGenerales()
  .subscribe(resp=>{this.promociones=resp,console.log(this.promociones)})
}
 
  modalshow()
{
  $('#myModal').modal('show');
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
        this.obtenerPromociones(); 
      }

      contratarPromocion(){
        
        console.log(this.form.value)
        this.service.contratarPromocion(this.form.value)
        .subscribe(
          resp=>{this.resultado=resp}
        )
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
