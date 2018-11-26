export class ShoppingCartItem {
  id: number;
  name: string;
  categoryId: number;
  sellingPrice: number;
  qty: number;

  constructor(param?: Partial<ShoppingCartItem>) {
    Object.assign(this, param);
  }

// לחשב גם אחוז הנחה ללקוח
  get totalPrice() {
    return this.qty * this.sellingPrice;
  }
}
