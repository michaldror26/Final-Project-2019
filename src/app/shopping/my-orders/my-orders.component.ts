// import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {OrderService} from '../../shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders;

  constructor(
    // private auth: AuthService,
    private orderService: OrderService
  ) { }

  async ngOnInit() {
   await this.orderService.getOrderByUser(16).subscribe((orders) => {
     this.orders = orders;
     console.log(this.orders);
   });
  }
}


