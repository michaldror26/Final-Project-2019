import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROOT_URL } from '../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  rootUrl=ROOT_URL+'Order/provider';
  constructor(private httpClient:HttpClient){

  }
  add(productsToSubmit:any[],id:number):Observable<string>
    {
    
          return this.httpClient.post<string>(this.rootUrl+'/'+id,productsToSubmit)
          .pipe(
          map(
            data => {return data;},
            error =>{}
        ));
      
      }
  }
