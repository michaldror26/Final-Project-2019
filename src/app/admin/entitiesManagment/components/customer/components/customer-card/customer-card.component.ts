import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input()
  customer: Customer = null;

  constructor(private _activateRout: ActivatedRoute,
              private _customerService: CustomerService) {
  }

  async ngOnInit() {
    const id = this._activateRout.snapshot.params['id'];
    await this._customerService.getCustomer(id).subscribe((cust: Customer) => this.customer = cust);
  }

}
