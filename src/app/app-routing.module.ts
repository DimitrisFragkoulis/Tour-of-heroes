import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './heroes/dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/hero/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail/hero-detail.component';
import {HeroSearchComponent} from './heroes/search/hero-search.component';
import { Assignment1Component } from './heroes/Assignment1/Assignment1.component';
import { Assignment2Component } from './heroes/Assignment2/Assignment2.component';
import { Assignment3Component } from './heroes/Assignment3/Assignment3.component';


const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Assignment1',  component: Assignment1Component },
  { path: 'Assignment2',  component: Assignment2Component },
  { path: 'Assignment3',  component: Assignment3Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}