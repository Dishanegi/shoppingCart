import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginAdminData={};
  constructor(private _adminService:AdminService,
    private _router:Router,
    private flashMsg:FlashMessagesService) { }

  ngOnInit(): void {
  }
//admin login
loginAdmin()
{
  //console.log(this.loginAdminData);
  this._adminService.loginAdmin(this.loginAdminData)
  .subscribe(
    res => {
      console.log(res)
      localStorage.setItem('tok',res.tok)
      this._router.navigate(['/admin/admin-view']);
    },
    err =>{ console.log(err);
      this.flashMsg.show('Either email is wrong or password', {cssClass:'alert-danger',timeout:3000});

    }
  )

}



}
