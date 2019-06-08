import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profiles/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   Profile:any[];
   repos:any[];
   username:string;
  
 

  constructor(private  ProfileService:  ProfileService ) { 
  }
  findProfile(){
    this.ProfileService.updateProfile(this.username);
    this.ProfileService.getProfileInfo().subscribe(Profile =>
    
      {
      console.log(Profile);
      this.Profile = Profile;
    });
    this.ProfileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos  = repos;
    });
  }
  
  ngOnInit() {
  }

}
