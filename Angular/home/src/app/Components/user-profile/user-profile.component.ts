import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import User from 'src/app/models/user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users : User[]=[];
 
   name:string;
   email:string;
   username:string;
   phoneNumber:number;
   password:string;
  constructor(private _auth : AuthService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>
    {


      const userId=params.userId;
      if(!userId) return;
      this._auth.getSpecificUser(userId).subscribe((users:User[])=> this.users=users);
   
    });
  }

}
