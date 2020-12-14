import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainCategoryService } from '../main-category.service';
import { MainCategory } from 'src/app/models/maincategory';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.css'],
  providers:[MainCategoryService]
})
export class AddMainCategoryComponent implements OnInit {


  mainCategories:MainCategory[];
  mainCategory:MainCategory;
  title:string;
  slug:string;

  constructor(private mainCategoryService:MainCategoryService) { }
  addmainCategory()
  {
    const newmainCategory={

  title:this.title,
  slug:this.slug,
  mainCategory:this.mainCategory
 
}
    this.mainCategoryService.addmainCategory(newmainCategory)
    .subscribe(mainCategory=>{
      this.mainCategories.push(mainCategory);
      this.mainCategoryService.getmainCategory()
    .subscribe(mainCategories =>
      this.mainCategories=mainCategories);
      alert("MainCategory added");
  
    });
  }


  ngOnInit(): void {
    this.mainCategoryService.getmainCategory()
    .subscribe(mainCategories =>
      this.mainCategories=mainCategories);
  }
  }


