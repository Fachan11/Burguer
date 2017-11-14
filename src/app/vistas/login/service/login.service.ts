import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { resultadoValidacion } from '../model/resultadoValidacion';
import { Usuarios } from '../../login/model/usuario';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(public http:Http) { }
url :string='http://localhost:52799/api/';
datos=new Usuarios();
  logindats(datos:Usuarios): Observable<resultadoValidacion>{
    
    return this.http.post(this.url+'login',datos)
    .map( resp => resp.json())
    .catch(this.handleErrorObservable);
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
