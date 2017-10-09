import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './vistas/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing.modul';
import { CotizacionesComponent } from './vistas/cotizaciones/cotizaciones.component';
import { EmpleadosComponent } from './vistas/empleados/empleados.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { HomeComponent } from './vistas/home/home.component';
import { MenuNavComponent } from './Componentes/menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CotizacionesComponent,
    EmpleadosComponent,
    MenuComponent,
    HomeComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
