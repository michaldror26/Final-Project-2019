import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {ThrowStmt} from '@angular/compiler';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms';
//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/map';

import {CookieService} from 'ngx-cookie-service';
import {SiteUserService} from '../../shared/services/siteUser.service';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private sub: any;
  returnPage: string;
  isValidData: boolean = true;
  userName: string = '';
  isUserLogin: boolean = false;
  userNameText: '';
  errorMessage: string;

  constructor(private siteUserService: SiteUserService,
              private authService: AuthService,
              private activateRoute: ActivatedRoute,
              private cookieService: CookieService,
              private router: Router) {
    this.userName = this.cookieService.get('userName');
    this.isUserLogin = this.userName !== '';
  }

  async ngOnInit() {
    this.sub = await this.activateRoute
      .queryParams
      .subscribe(params => {
        this.returnPage = (params['thisPage'] || '/').toString();
      });
  }


  async validateMe(data) {
    this.isValidData = true;
    await this.siteUserService.login(data.userName || this.userName, data.password).subscribe(
      data => {
        this.router.navigate([this.returnPage]);
      },
      error => {
        if (error.error instanceof ErrorEvent) {
          // client-side error
          this.errorMessage = 'נתונים שגויים';
        } else {
          // server-side error
          this.errorMessage = error.error.ExceptionMessage;
        }
        this.isValidData = false;
      },
    );
    const element = <HTMLInputElement>document.getElementById('c');
    if (element != null && element.checked) {
      this.saveAsCookie(data.userName);
    }
  }

  saveAsCookie(userName) {
    this.cookieService.set('userName', userName);
  }

  async forgetPassword() {
    await this.siteUserService.changePasword(this.userNameText).subscribe(data => this.errorMessage = data);
  }

  changeUser() {
    this.cookieService.deleteAll();
    this.userName = '';
    this.isUserLogin = false;
  }


}

