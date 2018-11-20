import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {EntitiesManagmentModule} from './entitiesManagment/entities-managment.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    EntitiesManagmentModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
