import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  
  {
    path: 'elements',
    loadChildren: './elements/elements.module#ElementsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
  
}
