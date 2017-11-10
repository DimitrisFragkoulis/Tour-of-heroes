import { Component } from '@angular/core';
import { Location }  from '@angular/common';



@Component({
    selector: 'Assignment2',
    templateUrl: './Assignment2.component.html',
    styleUrls: [ './Assignment2.component.css' ]
  })
  export class Assignment2Component {
    constructor(
      private location: Location
    ) {}
    
    goBack(): void {
      this.location.back();
    }
  }