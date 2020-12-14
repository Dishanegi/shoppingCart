import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid='';
  private reg_URL ="http://localhost:8000/users/register";
  private log_URL ="http://localhost:8000/users/login";
 
   constructor(private _http: HttpClient,
    private _router:Router) { }
   //get the users
   getUsers()
   {
     return this._http.get('http://localhost:8000/users');
     //.pipe(map((res:any)=> res.send()));
   
    }
 //post the data in db
 registerUser(user:any)
   {
     return this._http.post(this.reg_URL,user);
   }
 
 loginUser(user:any)
 {

   return this._http.post(this.log_URL,user);
 }
 
 
 UserloggedIn()
 {
  return !!localStorage.getItem('token');
 
 }

Userlogout()
{
  localStorage.removeItem('token');
  this._router.navigate(['/']);
}

validateRegister(user:any)
{
  if(user.name===undefined || user.email===undefined || user.username===undefined || user.phoneNumber===undefined || user.password===undefined)
  {
    return false;
  }
  return true;
}

validateEmail(email:any)
{
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

getSpecificUser(id:any)
{
  return this._http.get('http://localhost:8000/users/'+id);
}

}
