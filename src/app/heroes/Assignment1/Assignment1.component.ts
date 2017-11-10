import { Component } from '@angular/core';
import { Location }  from '@angular/common';



@Component({
    selector: 'Assignment1',
    templateUrl: './Assignment1.component.html',
    styleUrls: [ './Assignment1.component.css' ]
  })
  export class Assignment1Component {
    constructor(
      private location: Location
    ) {}
    
    goBack(): void {
      this.location.back();
    }
  }
