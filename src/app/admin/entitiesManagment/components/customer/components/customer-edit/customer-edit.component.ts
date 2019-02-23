import {Component, OnInit, Input} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';
import {CustomerService} from '../../../../../../shared/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SiteUserService} from '../../../../../../shared/services/siteUser.service';
import {SiteUser} from '../../../../../../shared/models/SiteUser.class';
import {CurrentUser} from '../../../../../../shared/currentUser';
import {User} from '../../../../../../shared/models/User.class';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;
  siteUser: SiteUser;
  isNew: boolean = false;
  linkToList: boolean = false;
  message = '';
  isCustomer: boolean;

  constructor(public _customerService: CustomerService,
              private _activateRout: ActivatedRoute,
              private _siteUserService: SiteUserService,
              private _router: Router,
              private _currentUser: CurrentUser
  ) {
  }

  async ngOnInit() {
    this.siteUser = new SiteUser();
    const id = this._activateRout.snapshot.params['id'];

    this.isCustomer = this._currentUser.isCustomer();

    if (id) {
      await this._customerService.getCustomerIncludeSiteUser(id).subscribe((cust: Customer) => {
        this.customer = cust;
        if(cust.SiteUser)
          this.siteUser = cust.SiteUser;
        console.log('siteUserId', this.customer.SiteUserId, !this.customer.SiteUserId);
        console.log(this.customer);
        console.log(this.siteUser);
      });
    } else {
      if (this.isCustomer) {

        this.customer = this._currentUser.get() as Customer;
        this.siteUser = this.customer.SiteUser;
      } else {
        this.customer = new Customer();
        this.isNew = true;
      }
    }

  }

  async addOrEditCustomer() {

    if (this.siteUser.UserName && this.siteUser.Password) {
      this.customer.SiteUser = this.siteUser;

    } else if (this.siteUser.UserName == '' && this.siteUser.Password == '') {
      this.customer.SiteUser = null;

    }
    console.log(this.customer);
    if (this.isNew) {
      await this._customerService.addCustomer(this.customer).subscribe(insertededCust => {
          if (insertededCust) {
            this.customer = insertededCust;
            this.message = 'הלקוח נוסף בהצלחה';
          } else {
            this.message = 'בדוק תקינות הפרטים שהזנת ונסה שוב';
          }
          setTimeout(function (router, custId) {
            router.navigate(['/admin/entities-managment/customers/details/' + custId]);
          }, 3000, this._router, this.customer.ID);
        },
        error1 => {
          this.message = error1.error.ExceptionMessage;
        }
      );
    } else {
      await this._customerService.editCustomer(this.customer).subscribe(updatedCust => {
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

}
