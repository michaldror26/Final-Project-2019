import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../../models/Customer.class";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  customersList: Customer[] = [];

  constructor(public _customrService: CustomerService,
              public router: Router,
              public rout: ActivatedRoute) {
  }

  ngOnInit() {
    this.customersList = this._customrService.getCustomers()
  }

  goEdit() {
    this.router.navigate(['/edit'], {relativeTo: this.rout});
  }

}
