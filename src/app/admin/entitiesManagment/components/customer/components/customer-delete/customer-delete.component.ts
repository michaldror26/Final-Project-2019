import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  // customer$;
  constructor(public _customerService: CustomerService,
              private _activateRout: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    let id: number = this._activateRout.snapshot.params['id'];
    this._customerService.getCustomer(id).subscribe((cust: Customer) => this.customer = cust);
  }

  deleteCustomer() {
    this._customerService.deleteCustomer(this.customer.CustomerId).subscribe((cust: Customer) => this.customer = cust);
    this._router.navigate(['../../view']);
  }

}
