import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { HeadComponent } from './head/head.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [HeadComponent, CustomerListComponent]
})
export class CustomersModule { }
