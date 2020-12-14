import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../categories';
@Component({
  selector: 'app-categoriestable',
  templateUrl: './categoriestable.component.html',
  styleUrls: ['./categoriestable.component.css'],
  providers:[CategoriesService]
})
export class CategoriestableComponent implements OnInit {



  constructor(private categoryService:CategoriesService) { }
  categories:Category[];
  category:Category;
  title:string;
  slug:string;

  deleteCategory(id:any)
  {
    var categories=this.categories;
    this.categoryService.deleteCategory(id)
    .subscribe(data=>
      {
        if(data.null==1)
        {
          for(var i=0; i< categories.length; i++)
          {
             if(categories[i]._id == id)
             {
               categories.splice(i,1);
             }
          }
        }
      });
  }


  ngOnInit(): void {
    this.categoryService.getCategories()
    .subscribe(categories =>
      this.categories=categories);
  }

}
