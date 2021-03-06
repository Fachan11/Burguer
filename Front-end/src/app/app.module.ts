import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {  ReactiveFormsModule, Form, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing.modul';
import { CotizacionesComponent } from './vistas/cotizaciones/cotizaciones.component';
import { EmpleadosComponent } from './vistas/empleados/empleados.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { HomeComponent } from './vistas/home/home.component';
import { MenuNavComponent } from './Componentes/menu-nav/menu-nav.component';
import { ProveedoresComponent } from './vistas/proveedores/proveedores.component';
import { InventarioComponent } from './vistas/inventario/inventario.component';
import { FacturasComponent } from './vistas/facturas/facturas.component';
import { LoginService } from './vistas/login/service/login.service';
import { MenuService } from './services/menu.service';
import { PromocionesserviceService } from './services/promocionesservice.service';
import { ModalComponent } from './Componentes/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizacionesComponent,
    EmpleadosComponent,
    MenuComponent,
    HomeComponent,
    MenuNavComponent,
    ProveedoresComponent,
    InventarioComponent,
    FacturasComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LoginService,MenuService,PromocionesserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
