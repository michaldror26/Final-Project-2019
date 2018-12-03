import {Component, OnInit} from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  constructor(private cartService:CartService) {

  }

  ngOnInit() {
    this.cartService.init();
  }
}
