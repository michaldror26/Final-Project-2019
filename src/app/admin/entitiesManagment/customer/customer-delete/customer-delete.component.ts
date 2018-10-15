import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/Customer.class';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  @Output()
  EventEmitter<Customer> customerToDelete = new EventEmitter<Customer>();

  constructor(public _customerService:CustomerService,
              private _activateRout: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number = this._activateRout.snapshot.params['id'];
    this.customer = this._customerService.getCustomer(id);
  }
  deleteCustomer()
  {

  }

}
