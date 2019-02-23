import {User} from './models/User.class';
import {Injectable} from '@angular/core';
import {Customer} from './models/Customer.class';
import { Employee } from './models/Employee.class';
import { Admin } from '../admin/shared/models/admin.class';


@Injectable({
  providedIn: 'root'
})
export class CurrentUser {
  //private user: User = null;
  private admin:Admin;
  private customer: Customer;
  private employee:Employee;
  

  constructor() {
    this.admin=this.customer=this.employee = null;
  }

  get() {
    return this.admin || this.customer || this.employee;
  }

  set(value) {
    if(value){
    if ((value as Admin).SiteUser.AuthenticationTypeId==1) {
      this.admin = value;
      this.customer=this.employee = null;
      return;
    }
    if ((value as Customer).SiteUser.AuthenticationTypeId==2) {
      this.customer = value;
      this.admin=this.employee = null;
      return;
    }
    if ((value as Employee).SiteUser.AuthenticationTypeId==3) {
      this.employee = value;
      this.admin=this.customer= null;
      return;
    }
    }
    this.admin=this.customer=this.employee = null;

  }

  isLogin() {
    return this.admin != null || this.customer != null || this.employee != null;
  }


  isAdmin() {
    return this.admin != null;
  }

  isCustomer() {
    return this.customer != null;
 }

 isEmployee() {
  return this.employee != null;
}
}
