<<<<<<< HEAD
﻿import { Category } from "./Category.class";

export class Product {
  public ProductId: number;
  public Name: string;
  public CategoryId: number;
  public Category:Category;
  public SellingPrice?: number; // float
  //to del
  // price?: string
  // available?: boolean
  // best_seller?: boolean
  // categories?: number[]
   img?: string
  // description?: string
}

=======
﻿export class Product {
  public ProductId: number;
  public Name: string;
  public CategoryId: number;
  public SellingPrice?: number; // float
  public Amount?: number; // float
  //to del
  // price?: string
  // available?: boolean
  // best_seller?: boolean
  // categories?: number[]
   public img?: string;
  // description?: string
}

>>>>>>> 272f16223b308c4970a5282c40488ce8a4dad270
