import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from "./login-page/login-page.component";
import { AuthGuard } from "../guards/auth.guard";
import { DeliveryPageComponent } from "./orders/delivery-page/delivery-page.component";
import { DeliveryViewComponent } from "./orders/delivery-page/delivery-view/delivery-view.component";
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import { SearchPipe } from "./categories-page/search.pipe";
import { EditProductComponent } from "./categories-page/edit-product/edit-product.component";
import { AddProductComponent } from "./categories-page/add-product/add-product.component";
import { ProductFormComponent } from "./categories-page/categories-form/product-form/product-form.component";

@NgModule({
  declarations: [AdminLayoutComponent,
    LoginPageComponent,
    DeliveryPageComponent,
    DeliveryViewComponent,
    CategoriesPageComponent,
    CategoriesFormComponent,
    ProductFormComponent,
    AddProductComponent,
    EditProductComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'admin', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'delivery', component: DeliveryPageComponent, canActivate: [AuthGuard] },
          { path: 'category', component: CategoriesPageComponent, canActivate: [AuthGuard] },
          { path: 'edit/:productId', component: EditProductComponent, canActivate: [AuthGuard] },
          { path: 'categories/new', component: CategoriesFormComponent, canActivate: [AuthGuard] },
          { path: 'categories/:categoryId', component: CategoriesFormComponent, canActivate: [AuthGuard] },
          { path: 'view/:orderId', component: DeliveryViewComponent, canActivate: [AuthGuard] },
        ]
      },
      { path: 'admin/login', component: LoginPageComponent }
    ])
  ],
  exports: [RouterModule],
})
export class AdminModule { }