import {Component, OnInit} from '@angular/core';
import {CurrentUser} from '../shared/currentUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public currentUser: CurrentUser) {
  }

  ngOnInit() {
    console.log(this.currentUser.isLogin());
  }

}
