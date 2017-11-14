import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

//VISTAS
import { LoginComponent } from "./vistas/login/login.component";
import { AppComponent } from "./app.component";
import { CotizacionesComponent } from "./vistas/cotizaciones/cotizaciones.component";
import { MenuComponent } from "./vistas/menu/menu.component";
import { EmpleadosComponent } from "./vistas/empleados/empleados.component";
import { HomeComponent } from "./vistas/home/home.component";
import { ProveedoresComponent } from "./vistas/proveedores/proveedores.component";
import { InventarioComponent } from "./vistas/inventario/inventario.component";
import { FacturasComponent } from "./vistas/facturas/facturas.component";


const appRoutes:Routes=[

    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},  
    {path:'empleados',component:EmpleadosComponent},  
    {path:'menu',component:MenuComponent},   
    {path:'cotizaciones',component:CotizacionesComponent},   
    {path:'proveedores', component:ProveedoresComponent},
    {path:'inventario', component:InventarioComponent},
    {path:'facturas',component:FacturasComponent}
]

export const appRoutingProviders: any[] = [


];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}