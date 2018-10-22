import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderComponent} from '../../provider/components/provider/provider.component';
import {ProviderViewComponent} from '../../provider/components/provider-view/provider-view.component';
import {ProviderEditComponent} from '../../provider/components/provider-edit/provider-edit.component';
import {ProviderCreateComponent} from '../../provider/components/provider-create/provider-create.component';
import {ProviderDeleteComponent} from '../../provider/components/provider-delete/provider-delete.component';
import {ProviderDetailsComponent} from '../../provider/components/provider-details/provider-details.component';

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
