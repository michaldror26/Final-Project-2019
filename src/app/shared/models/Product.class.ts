﻿export class Product {
  public id: number;
  public name: string;
  public categoryId: number;
  public sellingPrice: number; // float
//to del
  price?: string
  available?: boolean
  best_seller?: boolean
  categories?: number[]
  img?: string
  description?: string
}

