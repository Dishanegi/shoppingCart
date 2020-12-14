import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Product} from './product';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  URL ="http://localhost:3000/categories"
  constructor(private _http: HttpClient) { }
    //retrieving categoriesService

    getCategories()
    {
      return this._http.get(this.URL)
      //.pipe(map((res:any)=> res.send()));
    
     }
     
  //add Category method 
     addCategory(newCategory:any)
     {
       var headers=new HttpHeaders();
       headers.append('Content-Type','application/json');
       return this._http.post(this.URL,newCategory,{headers:headers})
       //.pipe(map((res:any)=> res.send()));
      
     }
  
     // delete Category method
     deleteCategory(id:any)
     {
       return this._http.delete("http://localhost:3000/categories/"+id)
       //.pipe(map((res:any)=> res.send()));
      
     }
}
