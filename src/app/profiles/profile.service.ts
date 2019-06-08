import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import   "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private accesstoken  = '4f68744308edbcaef5029b64c022bb5f6235b3b4';




  constructor(private http: Http) {
    console.log('Service Ready')
    this.username   = "Eccie-K";
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username +"?access_token=" + this.accesstoken)  
     .map(res =>  res.json());
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username +"/repos?access_token=" + this.accesstoken)  
    .map(res =>  res.json());
   }
}
