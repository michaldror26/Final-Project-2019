// import { AuthService } from 'shared/services/auth.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {logger} from 'codelyzer/util/logger';
import {parseAndResolve} from '../../shared/services/CommonMethods';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(
    // private auth: AuthService,
    private orderService: OrderService
  ) {
  }

  async ngOnInit() {
    await this.orderService.getOrderByUser(16).subscribe((orders) => {
      this.orders = parseAndResolve((JSON.stringify(orders)));
      console.log(this.orders);
    });
  }

}


