import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import  "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientsecret  = 'https://api.github.com/users/Eccie-K?access_token=4f68744308edbcaef5029b64c022bb5f6235b3b4';




  constructor(private http: Http) {
    console.log('Service Ready')
    this.username   = "Eccie-K";
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/", this.username + "?client_secret=4f68744308edbcaef5029b64c022bb5f6235b3b4")
     .map(res =>  res.json());
   }
}
