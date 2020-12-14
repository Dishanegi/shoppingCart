import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import  User  from 'src/app/models/user';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

 registerUserData={};
    constructor(private _auth: AuthService,
      private flashMsg:FlashMessagesService) { }
  
    ngOnInit(): void {
    }
  
  registerUser()
  {
  
    //console.log(this.registerUserData);
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
     // console.log(res)
      localStorage.setItem('token',res.token)
    },
     err => {
       this.flashMsg.show('Please check the email & password entered once again', {cssClass:'alert-danger',timeout:3000});
       console.log(err)}
    )
  }
}
