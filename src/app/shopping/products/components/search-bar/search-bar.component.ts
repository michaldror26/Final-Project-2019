import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  previousSearch: string;

  animatePlop: boolean = false;

  showSearch: boolean = true;

  @Output()
  onSearchChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.previousSearch = '';
    window.addEventListener('scroll', this.scroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll);
  }

  //Perform a plop animation on the search icon. This animation is executed on keydown just for visual reasons
  plop() {
    this.animatePlop = true;
    setTimeout(() => {
      this.animatePlop = false;
    }, 110);
  }

  reset() {
    this.showSearch = false;
    setTimeout(() => {
      this.showSearch = true;
    });
  }

  scroll() {
    document.getElementById('filterTop').style.top = window.scrollY >= 98 ? '45px' : '103px';
  }

  /*
    This event will emit an object indicating the new search term, and:
      -1 if the search term length has descreased
      1 if the search term length has increased
      0 if the search term remained equal
  */
  private onSearchKeyup(search: string) {
    let change = 0;
    if (search !== this.previousSearch) {
      change = 1;
    } else {
      change = -1;
    }
    this.previousSearch = search;
    console.log(({search, change}));
    // if(this.previousSearch != "")
    this.onSearchChange.emit({search, change});
  }
}
