import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes =  [
  
  {
    path: 'CustomerListComponent',
    component: CustomerListComponent
  },
  {
    path: '',
    redirectTo: '/CustomerListComponent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
