import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnythingComponent } from './show-page/anything/anything.component';


const routes: Routes = [
  {
    path: 'util',
    loadChildren: './util/util.module#UtilModule',
  },
  { path: '', redirectTo: '/anything', pathMatch: 'full' },
  { path: '**', component: AnythingComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
  
}
