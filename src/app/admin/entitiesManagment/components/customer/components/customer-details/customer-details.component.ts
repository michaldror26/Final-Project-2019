import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../../../../../shared/models/Customer.class';

@Component({
  selector: 'app-customer-details',
  template: `
    <p *ngIf="customer.FirstName || customer.LastName"><!-- class="font-weight-bold"-->
      <span>שם:</span> <span> {{customer.FirstName + " " + customer.LastName }}</span></p>
    <p *ngIf="customer.MobilePhone"><span>נייד:</span> {{ customer.MobilePhone }} </p>
    <p *ngIf="customer.Telephone"><span>טלפון:</span> {{ customer.Telephone }} </p>
    <p *ngIf="customer.Email"><span>כתובת מייל:</span> {{ customer.Email }} </p>
    <p *ngIf="customer.City"><span>עיר מגורים:</span> {{ customer.City }} </p>
    <hr>
    <p *ngIf="customer.RegisteredDate"><span>תאריך הצטרפות:</span> {{customer.RegisteredDate | date: 'dd/MM/yyyy'}} </p>
    <p *ngIf="customer.DiscountPercentage"><span>אחוז הנחה:</span> {{customer.DiscountPercentage }} </p>`,
  styles: [`
    p {
      display: block;
      width: 100%;
      text-align: right;
      margin-bottom: .5rem;

    }

    hr {
      width: 50%;
      margin-right: 0;
    }`]
})
export class CustomerDetailsComponent implements OnInit {
  @Input()
  customer: Customer = null;

  constructor() {
  }

  ngOnInit() {
  }

}
