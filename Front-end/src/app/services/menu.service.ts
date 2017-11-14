import { Injectable } from '@angular/core';
import {ListaComidas} from './../models/listaComida';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ListaBebidas } from '../Models/listaBebidas';

@Injectable()
export class MenuService {
  url:string="http://localhost:52799/api/";
  

  constructor(public http:Http) { }

  obtenerComidas():Observable<ListaComidas>{
        return this.http.get(this.url+'listaComidas')
        .map(resp => resp.json())
        .catch(this.handleErrorObservable)
  }

  obtenerBebidas():Observable<ListaBebidas>{
    return this.http.get(this.url+'listaBebidas')
    .map(resp=>resp.json())
    .catch(this.handleErrorObservable)
  }

  private extractData(res: Response) {
    
        let body = res.json();
        return body || {};
      }

      private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*')
        return headers;
    
      }

  private handleErrorObservable(error: Response | any) {
    
        return Observable.throw(error.body || error);
      }

      private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
      }

}
