import {Injectable} from '@angular/core';
import {Customer} from '../models/Customer.class';
import { SiteUser } from '../models/SiteUser.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private cusArr: Customer[] = [
  ];


  constructor() {
  }

  getCustomers(): Customer[] {
    return this.cusArr;
  }

  getCustomer(id: number): Customer {
    return this.cusArr.find(customer => customer.customerId == id);
  }


  deleteCustomer(id: number) {
    const index = this.cusArr.findIndex(customer => customer.customerId === id);
    if (index !== -1) {
      this.cusArr.splice(index, 1);
    }
  }

  editCustomer(updatedCustomer: Customer) {
    const index = this.cusArr.findIndex(customer => customer.customerId === updatedCustomer.customerId);
    if (index !== -1) {
      // TODO implement this as reallity
      this.cusArr[index] = updatedCustomer;
    }
  }

  search(text: string): Customer[] {
    return this.cusArr.filter(customer => customer.FirstName.includes(text)
      || customer.LastName.includes(text)
      || customer.MobilePhone.includes(text)
      || customer.Email.includes(text)
    );
  }
}
