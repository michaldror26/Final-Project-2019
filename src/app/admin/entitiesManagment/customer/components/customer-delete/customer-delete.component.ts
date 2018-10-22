import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Customer } from 'src/app/admin/entitiesManagment/entity-managment/models/Customer.class';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  constructor(public _customerService:CustomerService,
              private _activateRout: ActivatedRoute,
              private _router:Router) {
  }

  ngOnInit() {
    let id: number = this._activateRout.snapshot.params['id'];
    this.customer = this._customerService.getCustomer(id);
  }
  deleteCustomer()
  {
    this._customerService.deleteCustomer(this.customer.id);
    this._router.navigate(['../../view']);
  }

}
