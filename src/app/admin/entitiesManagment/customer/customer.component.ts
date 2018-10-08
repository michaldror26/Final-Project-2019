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


  activeLinkIndex=0;


  constructor() {
  }

  ngOnInit() {
  }

}
