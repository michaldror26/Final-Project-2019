import {Component, OnInit, Input} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../../shared/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer; // : Customer;
  customer$;
  linkToList: boolean = false;

  constructor(public _customerService: CustomerService,
              private _activateRout: ActivatedRoute,
              private _router: Router) {
  }

  async ngOnInit() {
    const id = this._activateRout.snapshot.params['id'];
    // this.customer$ = await this._customerService.getCustomer(id);
    this._customerService.getCustomer(id).subscribe(x => this.customer = x);
    console.log(this.customer);
    debugger;
  }

  editCustomer() {
    debugger;
    this._customerService.editCustomer(this.customer);
    this.linkToList = true;
  }
}
