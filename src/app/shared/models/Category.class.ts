export class Category {
  public ID: number;
  public Name: string;
  public ParentCategoryId: number;
  public ParentCategory :Category;
}

