import { Assignment1Component } from './heroes/Assignment1/Assignment1.component';
import { HeroSearchService } from './heroes/search/hero-search.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes/shared/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './heroes/dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/hero/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import { HeroService }          from './heroes/shared/hero.service';
import { HeroSearchComponent }  from './heroes/search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    Assignment1Component,
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService, HeroSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }