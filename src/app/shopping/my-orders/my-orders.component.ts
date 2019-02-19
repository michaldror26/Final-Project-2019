// import { AuthService } from 'shared/services/auth.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {parseAndResolve} from '../../shared/services/CommonMethods';
import {CurrentUser} from '../../shared/currentUser';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders: any[] = [];
  dateOredr: string = 'd';

  constructor(
    // private auth: AuthService,
    private orderService: OrderService,
    public currentUser: CurrentUser
  ) {
  }

  async ngOnInit() {
    const currentUser = this.currentUser.get();
    if (currentUser) {
      await this.orderService.getOrderByUser(currentUser.ID).subscribe((orders) => {
        this.orders = parseAndResolve((JSON.stringify(orders)));
        console.log(this.orders);
      });
    }

  }

  orderByDateD() {
    if (this.dateOredr === 'd') {
      this.orders = this.orders.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      this.dateOredr = 'u';
    } else {
      this.orders = this.orders.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
      this.dateOredr = 'd';

    }
  }

}


