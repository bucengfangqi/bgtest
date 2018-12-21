import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { PannelComponent } from './pannel/pannel.component';
const routes: Routes = [    {
  path: '',
  redirectTo: 'select',
  pathMatch: 'full',
},
{
  path: 'buttons',
  component: ButtonComponent,
  data: {
      title: '按钮'
  }
},{
  path: 'select',
  component: SelectComponent,
  data: {
      title: '下拉框'
  }
},{
  path: 'pannel',
  component: PannelComponent,
  data: {
      title: '面板'
  }
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicUiRoutingModule { }
