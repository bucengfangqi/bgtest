import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'basic-ui',
  pathMatch: 'full',
},
{
  path: 'basic-ui',
  loadChildren: './basic-ui/basic-ui.module#BasicUiModule',
  data: {
    title: '基础 UI'
  }
},
{
  path: 'layout',
  loadChildren: './layout/layout.module#LayoutModule',
  data: {
    title: '布局'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
