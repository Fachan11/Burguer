import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable';
import { PromocionesGenerales } from '../models/promocionesGenerales';
import { PromocionContratada } from '../models/promocionContratada';
import { resultadoValidacion } from '../vistas/login/model/resultadoValidacion';

@Injectable()
export class PromocionesserviceService {
private url:string="http://localhost:52799/api/"
  constructor(private http:Http) { }

  obtenerPromocionesGenerales():Observable<PromocionesGenerales>{
    return this.http.get(this.url+"promociones")
    .map(resp=>resp.json())
    .catch(this.handleErrorObservable)
  }

  contratarPromocion(objeto):Observable<resultadoValidacion>{
    return this.http.post(this.url+"contratarPromocion",objeto)
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
