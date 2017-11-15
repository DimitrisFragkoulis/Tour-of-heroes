import { UserService } from './../shared/user.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'Assignment4',
  templateUrl: './Assignment4.component.html',
  styleUrls: [ './Assignment4.component.css' ]
})
export class Assignment4Component implements OnInit{
  constructor(private userService: UserService) {}
  profile = {};

  ngOnInit(): void {
    
      this.userService.getUser()
      .subscribe(
           data => {
            this.profile = data ;
            console.log(this.profile);
          });
  }
  

}