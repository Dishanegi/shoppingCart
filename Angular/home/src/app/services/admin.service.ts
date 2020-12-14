import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient,
    private _router:Router) { }
     
 loginAdmin(admin:any)
 {
   return this._http.post("http://localhost:8000/admin/login",admin);
 }

  AdminloggedIn()
 {
   
return !!localStorage.getItem('tok');

 }
 Adminlogout()
{
  localStorage.removeItem('tok');
  this._router.navigate(['/']);
}

}
