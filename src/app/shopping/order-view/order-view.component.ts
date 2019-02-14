import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {parseAndResolve} from '../../shared/services/CommonMethods';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  orderId;
  order = null;
  totalSum = 0;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService) {
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

  calcTotalSum() {
    this.totalSum = 0;
    (this.order.SaleOrderProducts as Array<any>).forEach(item => {
      this.totalSum += item.Product.SellingPrice * item.Amount * this.order['Customer'].DiscountPercentage;
    });
  }
}
