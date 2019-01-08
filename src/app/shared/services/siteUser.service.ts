import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {User} from '../models/User.class';
import {ROOT_URL} from '../config';
import {CurrentUser} from '../currentUser';
import {Injectable} from '@angular/core';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class SiteUserService {

  constructor(private httpClient: HttpClient,
              private currentUser:CurrentUser,
              private authService:AuthService,
              private cookieService:CookieService) {
  }

  login(userName:string, password:string):Observable<any> {
   return this.httpClient
      .get<User>(ROOT_URL + 'user/login?userName='+userName+ '&password='+ password)
      .pipe(
      map(
        data => {this.currentUser.set(data as User);
                 this.authService.setRouter()},
        error =>{catchError(this.handleError)}
    )); 
  }

  logout():Observable<any> {
    this.currentUser.set(null);
    alert(this.cookieService.get("userName"));
    this.cookieService.deleteAll();
    alert(this.cookieService.get("userName"));
    this.authService.setRouter();
      return this.httpClient
      .post<any>(ROOT_URL + 'user/logout','')
        .pipe(
          catchError(this.handleError),
        );
  }   

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

    changePasword(userName:string)
    {
      return this.httpClient
      .get< String> (ROOT_URL + 'user/changePassword?userName='+userName)
      .pipe(
      map(
        data => {alert("    אמור להשלח מייל עם הססמה"+data.toString()); },
        error => catchError(this.handleError),
      ));
    }
  //edit(updatedCustomer: Customer) {
   // const index = this.userArr.findIndex(customer => customer.customerId === updatedCustomer.customerId);
    //if (index !== -1) {
     // // TODO implement this as reallity
     // this.cusArr[index] = updatedCustomer;
  //  }
 // }

  //search(text: string): Customer[] {
  //  return this.cusArr.filter(customer => customer.firstName.includes(text) 
  //    || customer.lastName.includes(text)
   //   || customer.mobilePhone.includes(text)
    //  || customer.email.includes(text)
   // );
 // }
}
