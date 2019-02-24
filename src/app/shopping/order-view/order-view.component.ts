import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {parseAndResolve} from '../../shared/services/CommonMethods';
import {CurrentUser} from '../../shared/currentUser';
import {Customer} from '../../shared/models/Customer.class';
import {CustomerService} from '../../shared/services/customer.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  orderId;
  order = null;
  totalSum = 0;
  customers: Customer[] = [];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    public  currentUser: CurrentUser) {
  }

  async ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    await this.orderService.getOrderById(this.orderId)
      .subscribe(order => {
          this.order = parseAndResolve(JSON.stringify(order));
          console.log(this.order);
          this.calcTotalSum();
        },
        error => {
          console.log(error);
        }
      );
  }
  backClicked() {
    window.history.back();
  }
  calcTotalSum() {
    this.totalSum = 0;
    (this.order.SaleOrderProducts as Array<any>).forEach(item => {
      this.totalSum += item.Product.SellingPrice * item.Amount * this.order['Customer'].DiscountPercentage;
    });
  }
}
