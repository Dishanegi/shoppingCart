import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainCategoryService } from '../main-category.service';
import { MainCategory } from 'src/app/models/maincategory';

@Component({
  selector: 'app-main-category-table',
  templateUrl: './main-category-table.component.html',
  styleUrls: ['./main-category-table.component.css'],
  providers:[MainCategoryService]
})
export class MainCategoryTableComponent implements OnInit {
  mainCategories:MainCategory[];
  mainCategory:MainCategory;
  title:string;
  slug:string;
  constructor(private mainCategoryService:MainCategoryService) { }

  deletemainCategory(id:any)
  {
    var mainCategories=this.mainCategories;
    this.mainCategoryService.deletemainCategory(id)
    .subscribe(data=>
      {
        if(data.null==1)
        {
          for(var i=0; i< mainCategories.length; i++)
          {
             if(mainCategories[i]._id == id)
             {
               mainCategories.splice(i,1);
             }
          }
        }
      });
  }


  ngOnInit(): void {
    this.mainCategoryService.getmainCategory()
    .subscribe(mainCategories =>
      this.mainCategories=mainCategories);
  }

}
