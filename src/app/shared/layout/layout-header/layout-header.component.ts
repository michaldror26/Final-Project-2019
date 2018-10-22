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
  routes: Routes = [
    {path: '/products', data: ['מוצרים'], children: []},
    {path: '/cart', data: ['עגלה'], children: []},
    {path: '/about', data: ['אודות'], children: []},
    {path: '/contact', data: ['צור קשר'], children: []}
  ];

  routesOfAdmin = [
    {path: '/',data:['צפייה במלאי'], children: []},
    {
      path: '',data:['קניה'], children: [
      {path: '1',data:['הזמן מספק']},
      {path: '2',data:['קבל מספק']},
      {path: '3',data:['מיון אתרוגים']},
    ]
    },
    {
      path: '',data:['מכירה'], children: [
      {path: '1',data:['הזמן ללקוח']},
      {path: '2',data:['אשר אספקה']},
      {path: '3',data:['החזר סחורה']},
      {path: '4',data:['צפי המכירות להיום']}
    ]
    },
    {path: '/',data:['תקבול'], children: []},
    {
      path: '/purchase',data:['בסיס נתונים'], children: [
      {path: '/admin/purchase/customers',data:['לקוחות']},
      {path: '/admin/purchase/providers',data:['ספקים']},
      {path: '/admin/purchase/employees',data:['עובדים']},
      {path: '/admin/purchase/products',data:['מוצרים']}
    ]
    },
    {
      path: '/',data:['דוחות'], children: [
      {path: '1',data:['בסיסי נתונים']},
      {path: '2',data:['קניה']},
      {path: '3',data:['מכירה']}
    ]
    },
    {
      path: '/',data:['סטטיסטיקה'], children: []
    }
  ];


  constructor(private router: Router) {
  }

  ngOnInit() {
   this.routes=this.routesOfAdmin;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loginPage = event.url === '/login';
      }
    });

  }

}
