import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),  // this is a module for using bootstrap
    AppRoutingModule       // this is a module for using routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
