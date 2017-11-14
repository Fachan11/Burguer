import { Component, OnInit } from '@angular/core';
import { ListaComidas } from './../../models/listaComida';

import { ListaBebidas } from '../../Models/listaBebidas';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  comidas = new ListaComidas();
  bebidas = new ListaBebidas();

  constructor(public menuServicio:MenuService) { }



  ngOnInit() {
this.obtenerComidasBebidas();
console.log(this.comidas);
  }

  obtenerComidasBebidas(){
    this.menuServicio.obtenerComidas()
    .subscribe(
      resp=>{this.comidas=resp,console.log(resp)}
    )

    this.menuServicio.obtenerBebidas()
    .subscribe(
      resp=> this.bebidas=resp
    )
  }

  imprimir(seccion): void {
    let printContents, popupWin;
    printContents = document.getElementById(seccion).innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}
  

}
