import { Injectable } from '@angular/core';
import { Product } from '../models/Product.class';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { ProductId: 1, CategoryId: 2, Name: 'product1', SellingPrice: 25 ,Amount:5},
    { ProductId: 2, CategoryId: 3, Name: 'product2', SellingPrice: 125 ,Amount:5},
    { ProductId: 3, CategoryId: 3, Name: 'product3', SellingPrice: 255 ,Amount:5},
    { ProductId: 4, CategoryId: 2, Name: 'product4', SellingPrice: 85 ,Amount:5},
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
    this.products.filter(p => p.ProductId === id);
  }

  updateById(id, product) {
  }

  deleteById(id) {
  }
}
