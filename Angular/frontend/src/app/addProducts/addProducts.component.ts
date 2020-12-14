import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-addProducts',
  templateUrl: './addProducts.component.html',
  styleUrls: ['./addProducts.component.css'],
  providers:[ProductsService]
})
export class AddProductsComponent implements OnInit {
  products : Product[];
  product:Product;
  title:string;
  slug:string;
  desc:string;
  category:string;
  price:number;
  image:string;
  image2:string;
  constructor(private productService:ProductsService) { }


  addProduct()
  {
    const newProduct={
  title:this.title,
  slug:this.slug,
  desc:this.desc,
  category:this.category,
  price:this.price,
  image:this.image,
  image2:this.image2


    }
    this.productService.addProduct(newProduct)
    .subscribe(product=>{
      this.products.push(product);
      this.productService.getProducts()
    .subscribe(products =>
      this.products=products);
      alert("Product added");
      console.log(this.products);
  
    });
  }
 
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(products =>
      this.products=products);
  }

}
