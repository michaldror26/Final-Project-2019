import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../../../../models/Customer.class";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;

  constructor(public _customerService:CustomerService,
              private _activateRout: ActivatedRoute) {
  }

  ngOnInit() {
    let id: number = this._activateRout.snapshot.params['id'];
    this.customer = this._customerService.getCustomer(id);
  }
 
}
