import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/app-product.component';
import { FormsModule } from '@angular/forms';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    ProductListComponent,
    HomePageComponent,
    AddProductComponent,
    AdminProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
