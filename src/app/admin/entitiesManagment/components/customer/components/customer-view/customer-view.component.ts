import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../../shared/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customersList: any[] = [];
  customersList2: Customer[] = [];

  constructor(public _customerService: CustomerService,
              public _router: Router,
              public _rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.customersList = this._customerService.getCustomers()
  }

  // goEdit() {
  //   this._router.navigate(['../edit',1], {relativeTo: this._rout});
  // }
  searchText(text: string){
    this.customersList = this._customerService.search(text);
  }
}
