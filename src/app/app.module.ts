import { Assignment4Component } from './Demo/Assignment4/Assignment4.component';
import { Assignment3Component } from './Demo/Assignment3/Assignment3.component';
import { Assignment2Component } from './Demo/Assignment2/Assignment2.component';
import { Assignment1Component } from './Demo/Assignment1/Assignment1.component';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { StartpageComponent }   from './Demo/startpage/startpage.component';
import { DataService }          from './Demo/service/data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    AppComponent,
    StartpageComponent,
    
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent, Assignment3Component, ]
})
export class AppModule { }