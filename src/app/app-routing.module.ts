import { StartpageComponent }   from './Demo/startpage/startpage.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Assignment1Component } from './Demo/Assignment1/Assignment1.component';
import { Assignment2Component } from './Demo/Assignment2/Assignment2.component';
import { Assignment3Component } from './Demo/Assignment3/Assignment3.component';
import { Assignment4Component } from './Demo/Assignment4/Assignment4.component';


const routes: Routes = [
  { path: 'startpage',  component:StartpageComponent },
  { path: '', redirectTo: '/startpage', pathMatch: 'full' },
  { path: 'Assignment1',  component: Assignment1Component },
  { path: 'Assignment2',  component: Assignment2Component },
  { path: 'Assignment3',  component: Assignment3Component },
  { path: 'Assignment4',  component: Assignment4Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}