
import { Assignment4Component } from './heroes/Assignment4/Assignment4.component';
import { Assignment3Component } from './heroes/Assignment3/Assignment3.component';
import { Assignment2Component } from './heroes/Assignment2/Assignment2.component';
import { Assignment1Component } from './heroes/Assignment1/Assignment1.component';
import { HeroSearchService }    from './heroes/search/hero-search.service';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { StartpageComponent }   from './heroes/startpage/startpage.component';
import { HeroesComponent }      from './heroes/hero/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import { HeroService }          from './heroes/shared/hero.service';
import { HeroSearchComponent }  from './heroes/search/hero-search.component';
import { UserService }          from './heroes/shared/user.service';

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
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  providers: [ HeroService, HeroSearchService,UserService ],
  bootstrap: [ AppComponent, Assignment3Component, ]
})
export class AppModule { }