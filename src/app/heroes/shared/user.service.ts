import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor (private http: Http) {}

getUser():Observable<any>{
    console.log("Here");
       return this.http.get(`https://ipinfo.io/json`).map((response:Response) => {
       return response.json();
    });
    } 

}
