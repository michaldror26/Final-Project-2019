import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../models/Customer.class";
import {Routes} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  routes: Routes = [
    {
      path: 'view',
      data: {name: 'לקוחות', atNavBar: true}
    },
    {
      path: 'edit/:id',
      data: {name: 'עריכה מחדש', atNavBar: true}
    },
    {
      path: 'create',
      data: {name: 'לקוח חדש', atNavBar: true}
    },
    {
      path: 'delete/:id',
      data: {name: 'מחיקה', atNavBar: false}
    },
  ];

  cusArr: Customer[] = [
    {
      id: 1,
      discountPercentage: 98,
      firstName: "miryam",
      lastName: "trabelsi",
      mobilePhone: "0587896541",
      city: "bney brak",
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

  activeLinkIndex=0;
  constructor() {
  }

  ngOnInit() {
  }

}
