import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { GetCodeComponent } from './get-code/get-code.component';

@NgModule({
  imports: [
    CommonModule,
    UtilsRoutingModule
  ],
  declarations: [GetCodeComponent]
})
export class UtilsModule { }
