import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './addProducts/addProducts.component';
import {HttpClientModule} from '@angular/common/http';
import { ProducttableComponent } from './producttable/producttable.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { CategoriestableComponent } from './categoriestable/categoriestable.component';
import { AddMainCategoryComponent } from './add-main-category/add-main-category.component';
import { MainCategoryTableComponent } from './main-category-table/main-category-table.component';
import { SaleComponent } from './sale/sale.component';
import { AddSaleComponent } from './add-sale/add-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    ProducttableComponent,
    AddCategoriesComponent,
    CategoriestableComponent,
    AddMainCategoryComponent,
    MainCategoryTableComponent,
    SaleComponent,
    AddSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
