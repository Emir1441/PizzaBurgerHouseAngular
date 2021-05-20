import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";






import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from "./login-page/login-page.component";

import { AuthGuard } from "../guards/auth.guard";

import { UploadImageComponent } from './upload-image/upload-image.component';


import { DeliveryPageComponent } from "./orders/delivery-page/delivery-page.component";
import { DeliveryViewComponent } from "./orders/delivery-page/delivery-view/delivery-view.component";
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoriesFormComponent } from './categories-page/categories-form/categories-form.component';
import { PositionsFormComponent } from './categories-page/categories-form/positions-form/positions-form.component';
import { AddPisitionComponent } from './categories-page/add-pisition/add-pisition.component';
import { EditPositionComponent } from './categories-page/edit-position/edit-position.component';
import { SearchPipe } from "./categories-page/search.pipe";









@NgModule({
  declarations: [AdminLayoutComponent,
    LoginPageComponent,
    UploadImageComponent,
    DeliveryPageComponent,
    DeliveryViewComponent,
    CategoriesPageComponent,
    CategoriesFormComponent,
    PositionsFormComponent,
    AddPisitionComponent,
    EditPositionComponent,
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
          { path: '', redirectTo: '/admin/category', pathMatch: 'full', canActivate: [AuthGuard] },
          { path: 'delivery', component: DeliveryPageComponent, canActivate: [AuthGuard] },
          { path: 'category', component: CategoriesPageComponent, canActivate: [AuthGuard] },
          { path: 'edit/:productId', component: EditPositionComponent, canActivate: [AuthGuard] },
          { path: 'categories/new', component: CategoriesFormComponent, canActivate: [AuthGuard] },
          { path: 'categories/:categoryId', component: CategoriesFormComponent, canActivate: [AuthGuard] },
          { path: 'view/:orderId', component: DeliveryViewComponent, canActivate: [AuthGuard] },
          { path: '**', redirectTo: '/admin/category' }
        ]

      },
      { path: 'admin/login', component: LoginPageComponent }
    ])

  ],
  exports: [RouterModule],

})
export class AdminModule { }

