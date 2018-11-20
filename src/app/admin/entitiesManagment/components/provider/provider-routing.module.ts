import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProviderViewComponent} from './components/provider-view/provider-view.component';
import {ProviderEditComponent} from './components/provider-edit/provider-edit.component';
import {ProviderCreateComponent} from './components/provider-create/provider-create.component';
import {ProviderDeleteComponent} from './components/provider-delete/provider-delete.component';
import {ProviderDetailsComponent} from './components/provider-details/provider-details.component';
import {ProviderService} from '../../../../shared/services/provider.service';


 const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'view'},
  {path: 'view', component: ProviderViewComponent, data: {name: 'ספקים', atNavBar: true}},
  {path: 'edit/:id', component: ProviderEditComponent, data: {name: 'עריכה מחדש', atNavBar: true}},
  {path: 'create', component: ProviderCreateComponent, data: {name: 'ספק חדש', atNavBar: true}},
  {path: 'delete/:id', component: ProviderDeleteComponent, data: {name: 'מחיקה', atNavBar: false}},
  {path: 'details/:id', component: ProviderDetailsComponent, data: {name: 'פרטים', atNavBar: false}},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProviderService]

})
export class ProviderRoutingModule {
}
