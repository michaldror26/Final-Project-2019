import {Component, OnInit} from '@angular/core';
import {parseAndResolve} from '../../../../../shared/services/CommonMethods';
import {OrderService} from '../../../../../shared/services/order.service';
import {Customer} from '../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../shared/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-sales-orders',
  templateUrl: './all-sales-orders.component.html',
  styleUrls: ['./all-sales-orders.component.css']
})
export class AllSalesOrdersComponent implements OnInit {

  orders: any[] = [];
  dateOrder = 'd';
  customers: any[] = [];
  customerId: number = null;

  constructor(private orderService: OrderService,
              private _customerService: CustomerService,
              private activeRoute: ActivatedRoute,
              private router: Router) {
  }

  async ngOnInit() {
    await this.getAllCustomers();
    this.activeRoute.queryParams.subscribe(async query => {
      const queryFormat = query['cust_id'];
      console.log(queryFormat); // Number(queryFormat) !== 'NaN'
      // @ts-ignore
      if (queryFormat === undefined) {
        this.customerId = null;
        this.router.navigate([], {
          queryParams: {'cust_id': 'all'}
        });
        await this.getAllOrders();
      } else {
        this.customerId = Number(queryFormat);
        await this.getOrdersByCustomer();
      }
    });
  }

  getAllCustomers() {
    this._customerService.getCustomers().subscribe((cust: Customer[]) => {
      this.customers = cust;
      console.log(this.customers);
    });
  }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe((orders) => {
      this.orders = parseAndResolve((JSON.stringify(orders)));
    });
  }

  async getOrdersByCustomer() {
    if (this.customerId) {
      await this.orderService.getOrderByUser(this.customerId).subscribe((orders) => {
        this.orders = parseAndResolve((JSON.stringify(orders)));
      });
    }
  }

  orderByDateD() {
    if (this.dateOrder === 'd') {
      this.orders = this.orders.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());
      this.dateOrder = 'u';
    } else {
      this.orders = this.orders.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());
      this.dateOrder = 'd';

    }
  }

  onSelectCustomer($event) {
    const selected = $event.target.value;
    if (selected === 'all') {
      this.getAllOrders();
      this.customerId = null;
    } else {
      this.customerId = selected;
      this.getOrdersByCustomer();
    }
    this.router.navigate([], {
      queryParams: {'cust_id': selected}
    });
  }
}
