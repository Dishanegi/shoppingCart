import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './addProducts/addProducts.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { CategoriestableComponent } from './categoriestable/categoriestable.component';
import { AddMainCategoryComponent } from './add-main-category/add-main-category.component';
import { MainCategoryTableComponent } from './main-category-table/main-category-table.component';
const routes: Routes = [ 
  {path: 'addProducts' ,component:AddProductsComponent},
  {path: 'allProducts' ,component:ProducttableComponent},
  {path: 'addCategories' ,component:AddCategoriesComponent},
  {path: 'allCategories' ,component:CategoriestableComponent},
  {path: 'allmainCategories' ,component:MainCategoryTableComponent},
  {path: 'addmainCategories' ,component:AddMainCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
