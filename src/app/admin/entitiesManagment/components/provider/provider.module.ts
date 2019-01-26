import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from './components/provider.component';
import {ProviderViewComponent} from './components/provider-view/provider-view.component';
import {ProviderEditComponent} from './components/provider-edit/provider-edit.component';
import {ProviderCreateComponent} from './components/provider-create/provider-create.component';
import {ProviderDeleteComponent} from './components/provider-delete/provider-delete.component';
import {ProviderDetailsComponent} from './components/provider-details/provider-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProviderComponent,
    ProviderViewComponent,
    ProviderEditComponent,
    ProviderCreateComponent,
    ProviderDeleteComponent,
    ProviderDetailsComponent]
})
export class ProviderModule {
}
