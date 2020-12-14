import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoriesService } from '../categories.service';
import { Category } from '../categories';
@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
  providers:[CategoriesService]
})
export class AddCategoriesComponent implements OnInit {
  
  categories:Category[];
  category:Category;
  mainCategory:string;
  title:string;
  slug:string;


  constructor(private categoryService:CategoriesService) { }

  addCategory()
  {
  const newCategory={
  mainCategory:this.mainCategory,
  title:this.title,
  slug:this.slug,
  category:this.category
 
}
    this.categoryService.addCategory(newCategory)
    .subscribe(category=>{
      this.categories.push(category);
      this.categoryService.getCategories()
    .subscribe(categories =>
      this.categories=categories);
      alert("Category added");
    
  
    });
  }


  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(categories =>
      this.categories=categories);
  }

}
