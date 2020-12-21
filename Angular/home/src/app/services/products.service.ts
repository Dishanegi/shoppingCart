import { Injectable } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
//uid:'';
  constructor(private _webService:WebService,
    private _http: HttpClient) { }

getmainCategory(){
  return this._webService.get('mainCategory');
}

  getCategories()
{
  return this._webService.get('categories');
}

getProducts()
{
  return this._webService.get('product');
}
getSpecificProductDetails(id:any)

{
 return this._webService.get(`product/${id}`);
}

getmainCategorywiseCategories(title:string)
{
  return this._webService.get(`mainCategory/${title}/categories`);
}
getCategorywiseProducts(title:string)
{
return this._webService.get(`categories/${title}/product`);
}

postCart(userId:string, productId:string ,title:string, price:number, quantity:number)
{
  //console.log(this.uid);
  return this._webService.post(`Cart/${userId}/${productId}/${title}/${price}`,{quantity});
  
}
getCart(userId:any)
{
  return this._webService.get(`Cart/${userId}/products`);
}
deleteCart(id:any)
{
  return this._http.delete("http://localhost:3000/Cart/"+id)

}
}


