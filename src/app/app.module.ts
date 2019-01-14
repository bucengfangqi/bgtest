import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroesModule } from './heroes/heroes.module';

import { ElementsModule } from './elements/elements.module';
import { UtilsModule } from './utils/utils.module';

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeroesModule,
    ElementsModule,
    UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
