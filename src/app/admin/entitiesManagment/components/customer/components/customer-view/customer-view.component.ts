import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customersList: Customer[] = [];
  realCustomersList: Customer[];

  constructor(public _customerService: CustomerService) {
  }

  async ngOnInit() {
   await this._customerService.getCustomers()
      .subscribe((employessObse: Customer[]) => {
        this.customersList = employessObse;
        this.realCustomersList = this.customersList;
      });
  }

  searchText(text: string) {
    this.customersList = this._customerService.search(this.realCustomersList, text);
  }
}
