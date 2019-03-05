import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {CartService} from '../../../cart.service';
import {CurrentUser} from '../../../../shared/currentUser';
import {Router} from '@angular/router';
import {parseAndResolve} from '../../../../shared/services/CommonMethods';

const OFFSET_HEIGHT: number = 170;
const PRODUCT_HEIGHT: number = 48;

@Component({
  selector: 'mini-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class MiniCartComponent implements OnInit {

  products: any[] = [];

  animatePlop: boolean = false;
  animatePopout: boolean = false;
  expanded: boolean = false;
  expandedHeight: string;
  cartTotal: number = 0;

  changeDetectorRef: ChangeDetectorRef;


  constructor(public cartService: CartService, changeDetectorRef: ChangeDetectorRef
    , private currUser: CurrentUser
    , public router: Router
  ) {
    this.changeDetectorRef = changeDetectorRef;

  }

  async ngOnInit() {
    await this.cartService.init();
    this.initCart();
    this.expandedHeight = '0';
    await this.cartService.productAdded$.subscribe(data => {

      this.products = data.products;
      this.cartTotal = data.cartTotal;
      let numProducts = data.numProducts;
      // Make a plop animation
      if (numProducts > 1) {
        this.animatePlop = true;
        setTimeout(() => {
          this.animatePlop = false;
        }, 160);
      } else if (numProducts == 1) {
        this.animatePopout = true;
        setTimeout(() => {
          this.animatePopout = false;
        }, 300);
      }

      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 30 + 'px';
      if (!this.products.length) {
        this.expanded = false;
      }
    });

    this.changeDetectorRef.detectChanges();
  }

  async initCart() {
    debugger
    this.expandedHeight = '0';
    await this.cartService.productAdded$.subscribe(data => {

      this.products = data.products;
      this.cartTotal = data.cartTotal;
      let numProducts = data.numProducts;
      // Make a plop animation
      if (numProducts > 1) {
        this.animatePlop = true;
        setTimeout(() => {
          this.animatePlop = false;
        }, 160);
      } else if (numProducts == 1) {
        this.animatePopout = true;
        setTimeout(() => {
          this.animatePopout = false;
        }, 300);
      }
      this.expandedHeight = (this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 30 + 'px';
      if (!this.products.length) {
        this.expanded = false;
      }

    });

    this.changeDetectorRef.detectChanges();
  }

  numProducts(): number {
    return this.cartService.numProducts;
  }

  deleteProduct(product) {
    this.cartService.deleteProductFromCart(product);
  }

  onCartClick() {
    this.expanded = true;
  }

  closeCart() {
    this.expanded = false;
  }

  async submitOrder() {
    const user = this.currUser.isLogin();
    if (user) {
      await this.cartService.saveCartOnServer().subscribe(order => {
        this.cartService.flushCart();
        this.router.navigate(['/shopping/orderdetails/' + order.ID]);

      });
    } else {
      this.router.navigate(['/login']);
    }
  }
}
