import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'alert',
  pathMatch: 'full',
},{
  path: 'alert',
  component: AlertComponent,
  data: {
      title: '弹出框'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
