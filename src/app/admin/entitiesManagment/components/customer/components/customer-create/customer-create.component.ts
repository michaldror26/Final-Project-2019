import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer;
  constructor() { }

  ngOnInit() {
    this.customer = new Customer();
  }

}
