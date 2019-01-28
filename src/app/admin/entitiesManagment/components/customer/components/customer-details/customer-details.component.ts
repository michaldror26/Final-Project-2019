import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer = null;

  constructor(private _activateRout: ActivatedRoute,
              private _customerService: CustomerService) {
  }

  ngOnInit() {
    const id = this._activateRout.snapshot.params['id'];
    this._customerService.getCustomer(id).subscribe((cust: Customer) => this.customer = cust);
  }


}
