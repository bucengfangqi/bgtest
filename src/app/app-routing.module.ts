import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  
  {
    path: 'elements',
    loadChildren: './elements/elements.module#ElementsModule'
  },
  {
    path: 'utils',
    loadChildren: './utils/utils.module#UtilsModule'
  },
  {
    path: '',
    redirectTo: 'utils',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
  
}
