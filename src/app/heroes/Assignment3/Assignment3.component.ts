import { Component } from '@angular/core';
import { Location }  from '@angular/common';



@Component({
    selector: 'Assignment3',
    templateUrl: './Assignment3.component.html',
    styleUrls: [ './Assignment3.component.css' ]
  })
  

  export class Assignment3Component {
    constructor(
      private location: Location
    ) {}
    
    goBack(): void {
      this.location.back();
    }
  }

