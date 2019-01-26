<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final-Project-UI';
}
=======
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Final-Project-UI';
  scrollDown = true;

  updateScrollToTop(event) {// TODO
    debugger;
    this.scrollDown = window.scrollY >= window.screenY;
  }
}
>>>>>>> 3e414644bb9cc468301f2c473745b8f8cb0ac38f
