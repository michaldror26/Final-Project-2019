// import { AuthService } from 'shared/services/auth.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {parseAndResolve} from '../../shared/services/CommonMethods';
import {CurrentUser} from '../../shared/currentUser';
import {Customer} from '../../shared/models/Customer.class';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(
    // private auth: AuthService,
    private orderService: OrderService,
    public currentUser: CurrentUser
  ) {
  }

  async ngOnInit() {
    await this.orderService.getOrderByUser((this.currentUser.get() as Customer).CustomerId).subscribe((orders) => {
      this.orders = parseAndResolve((JSON.stringify(orders)));
      console.log(this.orders);
    });
  }

}


