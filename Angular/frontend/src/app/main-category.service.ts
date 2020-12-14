import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { MainCategory } from 'src/app/models/maincategory';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {
  URL ="http://localhost:3000/mainCategory"
  constructor(private _http: HttpClient) { }
    //retrieving mainCategoryService
    getmainCategory()
    {
      return this._http.get(this.URL)
      //.pipe(map((res:any)=> res.send()));
    
     }
     
  //add Category method 
     addmainCategory(newmainCategory:any)
     {
       var headers=new HttpHeaders();
       headers.append('Content-Type','application/json');
       return this._http.post(this.URL,newmainCategory,{headers:headers})
       //.pipe(map((res:any)=> res.send()));
      
     }
  
     // delete Category method
     deletemainCategory(id:any)
     {
       return this._http.delete("http://localhost:3000/mainCategory/"+id)
       //.pipe(map((res:any)=> res.send()));
      
     }


}
