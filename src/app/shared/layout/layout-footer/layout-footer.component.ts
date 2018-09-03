import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {

  today: number = Date.now();

  constructor() {
  }

  ngOnInit() {
  }

}
