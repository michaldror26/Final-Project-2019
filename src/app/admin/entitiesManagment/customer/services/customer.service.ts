import {Injectable} from '@angular/core';
import {Customer} from '../../../../models/Customer.class';
import {SiteUser} from 'src/app/models/SiteUser.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private cusArr: SiteUser[] = [
  private cusArr: Customer[] = [
    {
      id: 1,
      discountPercentage: 98,
      firstName: 'מרים',
      lastName: 'טרבלסי',
      mobilePhone: '0587896541',
      city: 'בני ברק',
      email: 'miryam@gmail.com',
      telephone: '097496761',
      customerRegisterDate: new Date().toLocaleDateString(),
      // userName:'fvdgvgb',
      //  password:'26565'
    },
    {
      id: 2,
      discountPercentage: 98,
      firstName: 'sara',
      lastName: 'trabelsi',
      mobilePhone: '0587896541',
      city: 'bney brak',
      email: 'sara555@gmail.com',
      telephone: '097496761',
      customerRegisterDate: new Date().toLocaleDateString(),
      // userName:'fvdgvgb',
      // password:'26565'
    },
    {
      id: 3,
      discountPercentage: 98,
      firstName: 'dafna',
      lastName: 'trabelsi',
      mobilePhone: '0587896541',
      city: 'bney brak',
      email: 'dafnat555@gmail.com',
      telephone: '097496761',
      customerRegisterDate: new Date().toLocaleDateString(),
      // userName:'fvdgvgb',
      // password:'26565'
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

  deleteCustomer(id: number) {
      let customer = this.cusArr.find(customer => customer.id == id);

      const index = this.cusArr.indexOf(customer, 0);
      if (index > -1) {
        this.cusArr.splice(index, 1);
        console.log(this.cusArr);
      }
  }

  editCustomer(updatedCustomer:Customer) {
    //TODO implement this as reallity
    let cust=this.cusArr.find(customer => customer.id == updatedCustomer.id);
    let index=this.cusArr.indexOf(cust);
    this.cusArr[index]=updatedCustomer;

  }

  search(text:string):Customer[]{
    return this.cusArr.filter(customer=>customer.firstName.includes(text)
    ||customer.lastName.includes(text)
    ||customer.mobilePhone.includes(text)
    ||customer.email.includes(text)
    );
  }
}
