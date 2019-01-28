import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../../cart.service';
import { Product } from 'src/app/shared/models/Product.class';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() products: Product[]

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
  }
}
