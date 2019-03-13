import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  { path: 'page-two', component: PageTwoComponent },
  { path: 'page-three', component: PageThreeComponent },

  { path: '', redirectTo: 'page-one', pathMatch: 'full' },
  { path: '**', component: PageOneComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilRoutingModule { }
