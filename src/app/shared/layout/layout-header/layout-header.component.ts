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
    {component: '/cart', name: 'עגלה', children: []}
  ];

  routesOfAdmin = [
    {component: '/**', name: 'צפייה במלאי', children: []},
    {component: '', name: 'קניה', children: [
      {component:'1',name:'הזמן מספק'},
      {component:'2',name:'קבל מספק'},
      {component:'3',name:'מיון אתרוגים'},
    ]},
    {component: '', name: 'מכירה',children: [
      {component:'1',name:'הזמן ללקוח'},
      {component:'2',name:'אשר אספקה'},
      {component:'3',name:'החזר סחורה'},
      {component:'4',name:'צפי המכירות להיום'}
    ]},
    {component: '/', name: 'תקבול', children: []},
    {component: '', name: 'בסיס נתונים', children: [
      {component:'1',name:'לקוחות'},
      {component:'2',name:'ספקים'},
      {component:'3',name:'עובדים'},
      {component:'4',name:'מוצרים'}
    ]},
    {component: '/', name: 'דוחות', children: [
      {component:'1',name:'בסיסי נתונים'},
      {component:'2',name:'קניה'},
      {component:'3',name:'מכירה'}
    ]},
    {
      component: '/**', name: 'סטטיסטיקה', children: []
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
    this.routes=this.routesOfAdmin;
  }

}
