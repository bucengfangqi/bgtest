import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilRoutingModule } from './util-routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

@NgModule({
  imports: [
    CommonModule,
    UtilRoutingModule
  ],
  declarations: [PageOneComponent, PageTwoComponent, PageThreeComponent]
})
export class UtilModule { }
