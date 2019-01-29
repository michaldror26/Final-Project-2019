
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//import { DATA } from './mock-data';
import { Product } from '../shared/models/Product.class';
import { templateJitUrl } from '@angular/compiler';
import { Category } from '../shared/models/Category.class';


@Injectable()
export class DataService {
  Products:Product[]=[{"ProductId":1006,"Name":"אתרוג כשר","CategoryId":2,"SellingPrice":200.0 },{"ProductId":1009,"Name":"אתרוג תימני ג'ארד","CategoryId":3,"SellingPrice":200.0 },{"ProductId":1012,"Name":"אתרוג מחפוד א","CategoryId":1006,"SellingPrice":200.0 },{"ProductId":1021,"Name":"אתרוג מחפוד ב","CategoryId":1006,"SellingPrice":200.0 },{"ProductId":1022,"Name":"אתרוג מחפוד ג","CategoryId":1006,"SellingPrice":200.0 },{"ProductId":1023,"Name":"אתרוג מאזוז א","CategoryId":1007,"SellingPrice":200.0 },{"ProductId":1024,"Name":"אתרוג מאזוז ב","CategoryId":1007,"SellingPrice":200.0 },{"ProductId":1025,"Name":"אתרוג מאזוז ג","CategoryId":1007,"SellingPrice":200.0 },{"ProductId":1026,"Name":"אתרוג אשכנזי פתוח א","CategoryId":1008,"SellingPrice":200.0 },{"ProductId":1027,"Name":"אתרוג אשכנזי פתוח ב","CategoryId":1008 ,"SellingPrice":200.0 },{"ProductId":1028,"Name":"אתרוג אשכנזי פתוח ג","CategoryId":1008 ,"SellingPrice":200.0 },{"ProductId":1029,"Name":"אתרוג מהודר","CategoryId":2 ,"SellingPrice":200.0 },{"ProductId":1031,"Name":"אתרוג ג'ארד","CategoryId":2 ,"SellingPrice":0.0,"Amount":500},{"ProductId":2030,"Name":"קוישלעך","CategoryId":1 ,"SellingPrice":10.0 }];
  Categories:Category[]=[{"CategoryId":2,"Name":"אתרוגים","ParentCategoryId":1},{"CategoryId":100,"Name":"לולבים","ParentCategoryId":1},{"CategoryId":1010,"Name":"הדסים","ParentCategoryId":1},{"CategoryId":1011,"Name":"ערבות","ParentCategoryId":1},{"CategoryId":1006,"Name":"מחפוד","ParentCategoryId":2},{"CategoryId":1007,"Name":"מאזוז","ParentCategoryId":2},{"CategoryId":1008,"Name":"אשכנזי פתוח","ParentCategoryId":2}];
  constructor(private http: Http) { }

  getAllProducts(): Promise<Product[]>{
    //return Promise.resolve(DATA)
    return Promise.resolve(this.Products);
  }
  getAllCategories(): Promise<Category[]>{ 
    return Promise.resolve(this.Categories);
  }
  getRemoteData(url): Observable<any>{
    return this.http.get(url).pipe(
                    map(this.extractData),
                    catchError(this.handleError),);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return observableThrowError(errMsg);
  }

}
