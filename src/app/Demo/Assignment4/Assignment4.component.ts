import { DataService } from './../service/data.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'Assignment4',
  templateUrl: './Assignment4.component.html',
  styleUrls: [ './Assignment4.component.css' ]
})
export class Assignment4Component implements OnInit{
  constructor(private dataService: DataService) {}
  profile = {};

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe(
           data => {
            this.profile = data ;
          });
  }
  

}