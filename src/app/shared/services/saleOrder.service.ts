import { ROOT_URL } from "../config";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

let rootUrl=ROOT_URL+'Order/customer';
@Injectable()
export class SaleOrderService {

constructor(private httpClient:HttpClient){

}
add(productsToSubmit:any[],id?:number):Observable<string>
  {
    if(id!=null){
        return this.httpClient.post<string>(ROOT_URL+'/'+id,productsToSubmit)
        .pipe(
        map(
          data => {return data;},
          error =>{}
      ));
    }
    return this.httpClient.post<string>(ROOT_URL,productsToSubmit)
    .pipe(
    map(
      data => {return data;},
      error =>{}
  ));
}
}