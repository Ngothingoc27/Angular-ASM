import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/app-product.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'admin/product', component: AdminProductComponent},
  {path: 'product/:id/edit', component: EditProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
