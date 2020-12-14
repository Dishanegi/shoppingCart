import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Product} from './product';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL ="http://localhost:3000/product"
  constructor(private _http: HttpClient) { }


  getProducts()
  {
    return this._http.get(this.URL);
    //.pipe(map((res:any)=> res.send()));
  
  }
   
//add product method 
   addProduct(newProduct:any)
   {
     var headers=new HttpHeaders();
     headers.append('Content-Type','application/json');
     return this._http.post(this.URL,newProduct,{headers:headers})
     //.pipe(map((res:any)=> res.send()));
    
   }

   // delete product method
   deleteProduct(id:any)
   {
     return this._http.delete("http://localhost:3000/product/"+id)
     //.pipe(map((res:any)=> res.send()));
    
   }
   onUpload(newUpload:any)
   {
     return this._http.post(this.URL,newUpload)
   }
}
