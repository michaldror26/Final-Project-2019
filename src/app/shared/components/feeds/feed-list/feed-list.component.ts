// import {Component, OnInit, Input, Type, ViewChild, ComponentFactoryResolver} from '@angular/core';
// import {AdDirective} from '../directives/ad.directive';
//
// @Component({
//   selector: 'app-feeds-list',
//   templateUrl: './feeds-list.component.html',
//   styleUrls: ['./feeds-list.component.css']
// })
// export class FeedListComponent implements OnInit {
//
//   @Input() ad: { component: Type<any>, data: any };
//   @ViewChild(AdDirective) adHost: AdDirective;
//
//   constructor(private componentFactoryResolver: ComponentFactoryResolver) {
//   }
//
//   ngOnInit() {
//     this.loadComponent();
//   }
//
//   loadComponent() {
//     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.ad.component);
//     const viewContainerRef = this.adHost.viewContainerRef;
//     viewContainerRef.clear();
//
//     const componentRef = viewContainerRef.createComponent(componentFactory);
//     // (<AdComponent>componentRef.instance).data = this.ad.data;
//     (componentRef.instance).data = this.ad.data;
//   }
// }
