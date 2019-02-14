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
    this.scrollDown = window.scrollY >= window.screenY;
  }
}
