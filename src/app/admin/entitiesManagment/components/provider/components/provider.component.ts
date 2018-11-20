import { Component, OnInit } from '@angular/core';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  routes: Routes = [
    {
      path: 'view',
      data: {name: 'ספקים', atNavBar: true}
    },
    {
      path: 'edit/:id',
      data: {name: 'עריכה מחדש', atNavBar: false}
    },
    {
      path: 'create',
      data: {name: 'ספק חדש', atNavBar: true}
    },
    {
      path: 'delete/:id',
      data: {name: 'מחיקה', atNavBar: false}
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
