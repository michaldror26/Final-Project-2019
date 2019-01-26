<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {EntitiesManagmentModule} from './entitiesManagment/entities-managment.module';
import { PurchaseModule } from './purchase/purchase.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    EntitiesManagmentModule,
    PurchaseModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {EntitiesManagmentModule} from './entitiesManagment/entities-managment.module';
import { PurchaseModule } from './purchase/purchase.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    EntitiesManagmentModule,
    PurchaseModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
>>>>>>> 3e414644bb9cc468301f2c473745b8f8cb0ac38f
