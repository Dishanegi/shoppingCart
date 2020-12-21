import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  ROOT_URL="http://localhost:3000";
  constructor(private _http:HttpClient) {
 
   
   }

   get(uri:string)
   {
     return this._http.get(`${this.ROOT_URL}/${uri}`);
   }

   post(uri:string,payload:Object)
   {
     return this._http.post(`${this.ROOT_URL}/${uri}`,payload);
   }

   sendEmail(url:any, data:any) {
    return this._http.post(url, data);
  }
}
