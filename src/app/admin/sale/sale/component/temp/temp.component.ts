import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Customer } from 'src/app/shared/models/Customer.class';
import { ThrowStmt } from '@angular/compiler';
import { CartService } from 'src/app/shopping/cart.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  customers:Customer[];
 
  constructor(private customerService:CustomerService,private cartService:CartService) { 
  }

  ngOnInit() {
   this.customerService.getCustomers().subscribe(d=>{this.customers=d;});
   //this.customers=this.customerService.getTempCustomers();
    console.log(this.customers);
  }

  setCustomer(customerId:number){
   this.cartService.owerId=customerId;
   this.cartService.type ='customer';
  }

  
}
