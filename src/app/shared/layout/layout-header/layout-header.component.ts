import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, Routes} from "@angular/router";


@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  loginPage: boolean = false;
  // @Input()
  // routes: Routes;
  routes = [
    {component: '/about', name: 'אודות', children: []},
    {component: '/products', name: 'מוצרים', children: []},
    {component: '/contact', name: 'צור קשר', children: []},
    {component: '/cart', name: 'עגלה', children: []},
    {
      component: '/', name: 'בית', children: [
      {component: '/about', name: 'אודות'},
      {component: '/products', name: 'מוצרים'},
      {component: '/contact', name: 'צור קשר'},
      {component: '/cart', name: 'עגלה'},]
    }
  ];


  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loginPage = event.url === '/login';
      }
    });
  }

  ngOnInit() {
  }

}
