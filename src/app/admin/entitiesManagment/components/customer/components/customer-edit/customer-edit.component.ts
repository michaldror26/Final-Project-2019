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

  customer: Customer;
  isNew: boolean = false;
  linkToList: boolean = false;
  message = '';

  constructor(public _customerService: CustomerService,
              private _activateRout: ActivatedRoute) {
  }

  async ngOnInit() {
    const id = this._activateRout.snapshot.params['id'];

    if (id) {
      this._customerService.getCustomer(id).subscribe((cust: Customer) => this.customer = cust);
    } else {
      this.customer = new Customer();
      this.isNew = true;
    }
    console.log(this.customer);
  }

  addOrEditCustomer() {
    if (this.isNew) {
      this._customerService.addCustomer(this.customer).subscribe(insertededCust => {
          if (insertededCust) {
            this.customer = insertededCust;
            this.message = 'הלקוח נוסף בהצלחה';
          } else {
            this.message = 'בדוק תקינות הפרטים שהזנת ונסה שוב';
          }
        }
      );
    } else {
      this._customerService.editCustomer(this.customer).subscribe(updatedCust => {
        if (updatedCust) {
          this.customer = updatedCust;
          this.message = 'הלקוח נוסף בהצלחה';
        } else {
          this.message = 'בדוק תקינות הפרטים שהזנת ונסה שוב';
        }
      });
    }
    this.linkToList = true;
  }

  register() {

  }
}
