import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetCodeComponent } from './get-code/get-code.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'get-code',
  pathMatch: 'full',
},{
  path: 'get-code',
  component: GetCodeComponent,
  data: {
      title: '获取验证码'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
