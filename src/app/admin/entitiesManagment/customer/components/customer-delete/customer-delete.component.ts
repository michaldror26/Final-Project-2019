import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../entity-managment/models/Customer.class';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  constructor(public _customerService: CustomerService,
              private _activateRout: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    const id: number = this._activateRout.snapshot.params['id'];
    this.customer = this._customerService.getCustomer(id);
  }

  deleteCustomer() {
    this._customerService.deleteCustomer(this.customer.customerId);
    this._router.navigate(['../../view']);
  }

}
