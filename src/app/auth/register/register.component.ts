import {Component, OnInit} from '@angular/core';
import {Customer} from '../../shared/models/Customer.class';
import {SiteUser} from '../../shared/models/SiteUser.class';
import {CustomerService} from '../../shared/services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SiteUserService} from '../../shared/services/siteUser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer;
  siteUser: SiteUser;
  message = '';
  loginPage = false;

  constructor(public _customerService: CustomerService,
              private _activateRout: ActivatedRoute,
              private _siteUserService: SiteUserService,
              private _router: Router
  ) {
  }

  async ngOnInit() {
    this.customer = new Customer();
    this.customer.SiteUser = new SiteUser();
  }

// בינתיים הרגיסטר הוא רק ללקוח
 async register() {
   await this._customerService.addCustomer(this.customer).subscribe(insertededCust => {
        if (insertededCust) {
          this.customer = insertededCust;
          this.message = 'נרשמת בהצלחה!!';

          setTimeout(function (router) {
            router.navigate(['/login']);
          }, 3000, this._router);

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
