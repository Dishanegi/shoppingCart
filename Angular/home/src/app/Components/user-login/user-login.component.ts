import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginUserData={};
 
  
  
    constructor(private _authService:AuthService,
      private _router:Router,
      private flashMsg:FlashMessagesService) { }
  
    ngOnInit(): void {
    }

    //login admin
  loginUser()
  {
    //console.log(this.loginUserData);
    this._authService.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res);
       var tokenobj={
         token:res.token,
         uid:res.uid
       }
       this._authService.uid=res.uid;
       console.log(res.uid);
        localStorage.setItem('token',JSON.stringify(tokenobj));
        this._router.navigate(['/']);  
      },
      err =>{

      console.log(err);
      this.flashMsg.show('Either email is wrong or password', {cssClass:'alert-danger',timeout:3000});

      
      }
     
    )
   
  }
  
}
