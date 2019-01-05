import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../../../shared/models/Customer.class';
import { CustomerService } from '../../../../../../shared/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customersList$: Observable<Customer[]>;
  customersList: Customer[] = [];

  constructor(public _customerService: CustomerService,
    public _router: Router,
    public _rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.customersList$ = this._customerService.getCustomers();
    //to remove
    // this.customersList$.subscribe(x => this.customersList = x);
  }
  
  searchText(text: string) {
    this.customersList$ = this._customerService.search(text);
    //to remove
    // this.customersList$.subscribe(list => this.customersList = list)
  }
}
