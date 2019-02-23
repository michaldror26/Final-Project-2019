import {Category} from './Category.class';

export class Product {
  public ID: number;
  public Name: string;
  public CategoryId: number;
  public Category?: Category;
  public SellingPrice?: number; // float
  //to del
  // price?: string
  // available?: booleanבוד
  // best_seller?: boolean
  // categories?: number[]
  public img?: string;
  // description?: string
}
