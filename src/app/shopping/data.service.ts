import { Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product.class';
import { templateJitUrl } from '@angular/compiler';
import { Category } from '../shared/models/Category.class';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../shared/config';


@Injectable()
export class DataService {
  //  Products: Product[] = [
  //    {ProductId: 1006, Name: 'אתרוג כשר', CategoryId: 2, SellingPrice: 200.0},
  //    {ProductId: 1009, Name: 'אתרוג תימני ג\'ארד', CategoryId: 3, SellingPrice: 200.0},
  //    {ProductId: 1012, Name: 'אתרוג מחפוד א', CategoryId: 1006, SellingPrice: 200.0},
  //    {ProductId: 1021, Name: 'אתרוג מחפוד ב', CategoryId: 1006, SellingPrice: 200.0},
  //    {ProductId: 1022, Name: 'אתרוג מחפוד ג', CategoryId: 1006, SellingPrice: 200.0},
  //    {ProductId: 1023, Name: 'אתרוג מאזוז א', CategoryId: 1007, SellingPrice: 200.0},
  //    {ProductId: 1024, Name: 'אתרוג מאזוז ב', CategoryId: 1007, SellingPrice: 200.0},
  //    {ProductId: 1025, Name: 'אתרוג מאזוז ג', CategoryId: 1007, SellingPrice: 200.0},
  //    {ProductId: 1026, Name: 'אתרוג אשכנזי פתוח א', CategoryId: 1008, SellingPrice: 200.0},
  //    {ProductId: 1027, Name: 'אתרוג אשכנזי פתוח ב', CategoryId: 1008, SellingPrice: 200.0},
  //    {ProductId: 1028, Name: 'אתרוג אשכנזי פתוח ג', CategoryId: 1008, SellingPrice: 200.0},
  //    {ProductId: 1029, Name: 'אתרוג מהודר', CategoryId: 2, SellingPrice: 200.0},
  //    {ProductId: 1031, Name: 'אתרוג ג\'ארד', CategoryId: 2, SellingPrice: 0.0, Amount: 500},
  //    {ProductId: 2030, Name: 'קוישלעך', CategoryId: 1, SellingPrice: 10.0}
  //  ];
  //  Categories: Category[] = [
  //    {CategoryId: 2, Name: 'אתרוגים', ParentCategoryId: 1},
  //    {CategoryId: 100, Name: 'לולבים', ParentCategoryId: 1},
  //    {CategoryId: 1010, Name: 'הדסים', ParentCategoryId: 1},
  //    {CategoryId: 1011, Name: 'ערבות', ParentCategoryId: 1},
  //    {CategoryId: 1006, Name: 'מחפוד', ParentCategoryId: 2},
  //    {CategoryId: 1007, Name: 'מאזוז', ParentCategoryId: 2},
  //    {CategoryId: 1008, Name: 'אשכנזי פתוח', ParentCategoryId: 2}];
  Products: Product[];
  Categories: Category[];

  constructor(private httpClient: HttpClient) {
   // this.getProductsFromServer().subscribe(d => console.log(d));
   // this.getCategoriesFromServer().subscribe(d => console.log(d));
  }


  public getProductsFromServer() {
    return this.httpClient
    .get<Product[]>(ROOT_URL + 'products/category/2')
      // .get<Product[]>(ROOT_URL + 'products/getAllProducts')
      .pipe(
        map(
          data => {
            this.Products = data;
            console.log(this.Products);
            return data;
          },
          error => {
          }
        ));
  }

  // public getCategoriesFromServer() {
  public getCategoriesFromServer(): Observable<Category[]> {
    return this.httpClient
      // .get<Category[]>(ROOT_URL + 'category/2')
      .get<Category[]>(ROOT_URL + 'category/getCategories')
      .pipe(
        map(
          data => {
            this.Categories = data;
            console.log(this.Categories);
            return data;
          },
          error => {
          }
        ));
  }

  getAllProducts():Observable<Product[]> {
    return this.getProductsFromServer()
  }

  getAllCategories(): Category[] {
    //return Promise.resolve(this.Categories);
    return this.Categories;
  }

}

