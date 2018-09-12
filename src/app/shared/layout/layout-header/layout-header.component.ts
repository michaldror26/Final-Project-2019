import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  loginPage: boolean = false;

  constructor() {
    // TODO not correct question
    this.loginPage = window.location.href.endsWith('login');
  }

  ngOnInit() {

  }

}
