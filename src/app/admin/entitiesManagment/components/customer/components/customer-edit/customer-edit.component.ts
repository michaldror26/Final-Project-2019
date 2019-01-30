import {Component, OnInit, Input} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../../shared/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SiteUserService} from '../../../../../../shared/services/siteUser.service';
import {SiteUser} from '../../../../../../shared/models/SiteUser.class';

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
              private _activateRout: ActivatedRoute,
              private _siteUserService: SiteUserService
  ) {
  }

  async ngOnInit() {
    const id = this._activateRout.snapshot.params['id'];

    if (id) {
      this._customerService.getCustomer(id).subscribe((cust: Customer) => {
        this.customer = cust;
        console.log('siteUserId', this.customer.SiteUserId);
        if (!this.customer.SiteUserId) {
          this.customer.SiteUser = new SiteUser();
        }
      });
    } else {
      this.customer = new Customer();
      this.customer.SiteUser = new SiteUser();
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
        },
        error1 => {
          this.message = error1.error.ExceptionMessage;
        }
      );
    } else {
      this._customerService.editCustomer(this.customer).subscribe(updatedCust => {
          if (updatedCust) {
            this.customer = updatedCust;
            this.message = 'הלקוח עודכן בהצלחה';
          } else {
            this.message = 'בדוק תקינות הפרטים שהזנת ונסה שוב';
          }
        },
        error1 => {
          this.message = error1.error.ExceptionMessage;
        });
    }
    this.linkToList = true;
  }

  registerWithId() {
    if (this.customer.CustomerId) {
      this._siteUserService.registerWithId(this.customer.SiteUser.userName, this.customer.SiteUser.password, 2, this.customer.CustomerId)
        .subscribe(insertededCust => {
            if (insertededCust) {
              this.customer = insertededCust as Customer;
              this.message = 'הלקוח נרשם בהצלחה';
            } else {
              this.message = 'בדוק תקינות הפרטים שהזנת ונסה שוב';
            }
          },
          error1 => {
            this.message = error1.error.ExceptionMessage;
          }
        );
    }
  }
}
