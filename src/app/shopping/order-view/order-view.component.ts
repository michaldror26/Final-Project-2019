import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {OrderService} from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  orderId;
  order = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService) {
  }

  async ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(this.orderId)
      .subscribe(order => {
          this.order = order;
          console.log(this.order);
        },
        error => {
        debugger
          console.log(error);

        }
      );

  }


}
