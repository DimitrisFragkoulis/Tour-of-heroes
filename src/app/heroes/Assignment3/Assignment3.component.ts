import { Location }  from '@angular/common';
import {Component, OnInit, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'Assignment3',
    templateUrl: './Assignment3.component.html',
    styleUrls: [ './Assignment3.component.css' ]
  })
  
  export class Assignment3Component implements OnInit {
  
    
      
      public ngOnInit() {
    
        this.color = [
          { colorId: 1, name: "Red" },
          { colorId: 2, name: "Blue" },
          { colorId: 3, name: "Black"}
        ]  
      }
      
      
      public color: Color[];
      public selectedColor: Color;  
      
      public selectByName(name: string) {
        this.selectedColor = this.color.find(color => color.name === name);
      }

      constructor(
        private location: Location
      ) {}

      goBack(): void {
        this.location.back();
      }
    
      
    }
    
    export class Color {
      public colorId: number;
      public name: string;
    }
   