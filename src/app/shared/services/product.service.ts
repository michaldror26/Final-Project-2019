import { Injectable } from '@angular/core';
import { Product } from '../models/Product.class';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, categoryId: 2, name: 'product1', sellingPrice: 25 },
    { id: 2, categoryId: 3, name: 'product2', sellingPrice: 125 },
    { id: 3, categoryId: 3, name: 'product3', sellingPrice: 255 },
    { id: 4, categoryId: 2, name: 'product4', sellingPrice: 85 },
  ];
  basicURL: string = 'urlBasic';

  constructor(private http: Http) {
  }

  create(product) {
  }

  getAll(): Product[] {
    return this.products;

    // let url: string = this.basicURL + `/getAllProducts`;
    // return this.http.get(url)
    //   .map((res: Response) => <Product[]>res.json());
  }

  getById(id: number) {
    this.products.filter(p => p.id === id);
  }

  updateById(id, product) {
  }

  deleteById(id) {
  }
}
