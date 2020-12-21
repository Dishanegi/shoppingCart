import { Injectable } from '@angular/core';
import Product from "./models/product";
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProService {
 // URL ="http://localhost:3000/product"


 products:Product[]=[
   new Product('asd','fruits','asd','asd','fruits',20,'disha','disha2'),
   new Product('asd','fruits','asd','asd','fruits',20,'disha','disha2'),
   new Product('asd','fruits','asd','asd','fruits',100,'disha','disha2'),
   new Product('asd','fruits','asd','asd','fruits',100,'disha','disha2'),

 ]


  constructor() { }
getProducts():Product[]{
  return this.products;
}
 
  
 
}
