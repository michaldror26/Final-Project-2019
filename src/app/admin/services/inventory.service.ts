import {ROOT_URL} from '../../shared/config'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/shopping/shared/category.model';

export class InventoryService{

constructor(private httpClient:HttpClient){}

getAmountProject():Observable<number> {
    return this.httpClient
       .get<number>(ROOT_URL + 'inventory/amount?id=2')
       .pipe(
       map(
         data => {return data},
         error =>{}
     )); 
   }

   getAllSubCategories(c:Category):Observable<number> {
    return this.httpClient
       .get<number>(ROOT_URL + 'inventory/')
       .pipe(
       map(
         data => {return data},
         error =>{}
     )); 
   }
}