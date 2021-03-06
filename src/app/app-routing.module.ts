
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { ListProductComponent } from './list-product/list-product.component';





const routes: Routes = [
  { path: '', component: HomeProductComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'list', component: ListProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/:id', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
