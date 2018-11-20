import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/Product.class';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async addToCart(product: Product) {
    this.updateItemQty(product, 1);
  }

  async removeFromCart(product) {
    this.updateItemQty(product, -1);
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-cart/' + cartId)
      .map(cart => new ShoppingCart(cart.items));
  }

  async clearAllCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-cart/' + cartId).remove();
  }

  private async updateItemQty(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.id);

    item$.take(1).subscribe(item => {
      const updatedQty = (item.qty || 0) + change;

      if (updatedQty <= 0) {
        item$.remove();
      }
      else {
        item$.update({

        });
      }

    });
  }

  private createCartId() {
    return this.db.list('shopping-cart').push({
      dateTime: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cardId');
    if (cartId) return cartId;

    let cart = await this.createCartId();

    cartId = localStorage.getItem('cardId');
    if (cartId) return cartId;

    localStorage.setItem('cardId', cart.key);
    return cart.key;
  }

  private getItem(cartId, key) {
    return this.db.object('/shopping-cart/' + cartId + '/items/' + key);
  }

}
