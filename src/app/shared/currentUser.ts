import {User} from './models/User.class';
import {Injectable} from '@angular/core';
import { Customer } from './models/Customer.class';


@Injectable({
  providedIn: 'root'
})
export class CurrentUser  {
    private user:User=null;
    private customer:Customer=null;    

  constructor() {
  }
   get(){
       return this.customer || this.user;
   }

   set(value){
       if(value==null)
       {
           this.user=this.customer=null;
           return;
       }
       if((value as Customer).CustomerId){
          this.customer=value;
          return;
       }   
      this.user=value;
   }

   isUserLogin()
   {
       return this.user!=null || this.customer !=null ;
   }

   isCustomer()
   {
       return this.user ==null && this.customer!=null;
   }
}