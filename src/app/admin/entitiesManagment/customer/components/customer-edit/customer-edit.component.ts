import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../../entity-managment/models/Customer.class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;
  linkToList:boolean=false;

  constructor(public _customerService:CustomerService,
              private _activateRout: ActivatedRoute,
              private _router:Router) {
  }

  ngOnInit() {
    let id: number = this._activateRout.snapshot.params['id'];
    this.customer = this._customerService.getCustomer(id);
  }
  editCustomer() {
    {
      this._customerService.editCustomer(this.customer);
      //settimeout of animated that the customer updated
      this.linkToList = true;
    }
  }
}
