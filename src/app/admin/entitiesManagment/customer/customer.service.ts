import {Injectable} from '@angular/core';
import {Customer} from "../../../models/Customer.class";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private cusArr: Customer[] = [
    {
      id: 1,
      discountPercentage: 98,
      firstName: "מרים",
      lastName: "טרבלסי",
      mobilePhone: "0587896541",
      city: "בני ברק",
      email: "miryam@gmail.com",
      telephone: "097496761",
      customerJoiningDate: new Date(),
    },
    {
      id: 2,
      discountPercentage: 98,
      firstName: "sara",
      lastName: "trabelsi",
      mobilePhone: "0587896541",
      city: "bney brak",
      email: "sara555@gmail.com",
      telephone: "097496761",
      customerJoiningDate: new Date(),
    },
    {
      id: 3,
      discountPercentage: 98,
      firstName: "dafna",
      lastName: "trabelsi",
      mobilePhone: "0587896541",
      city: "bney brak",
      email: "dafnat555@gmail.com",
      telephone: "097496761",
      customerJoiningDate: new Date(),
    },

  ];


  constructor() {
  }

  getCustomers(): Customer[] {
    return this.cusArr;
  }

  getCustomer(id: number): Customer {
    return this.cusArr.find(customer => customer.id == id);
  }
  //
  // deleteCustomer(id: number) {
  //   let customer = this.cusArr.find(customer => customer.id == id);
  //
  //   const index = this.cusArr.indexOf(customer, 0);
  //   if (index > -1) {
  //     this.cusArr.splice(index, 1);
  //     console.log(this.cusArr);
  //   }
  // }

}
