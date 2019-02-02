import { Category } from "./Category.class";

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

