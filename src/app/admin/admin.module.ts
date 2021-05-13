import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/admin-layout/admin-layout.component";


import { AddPageComponent } from './add-page/add-page.component';

import { EditPageComponent } from './edit-page/edit-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from "./login-page/login-page.component";
import { ListPageComponent } from './list-page/list-page.component';
import { AuthGuard } from "../guards/auth.guard";

import { UploadImageComponent } from './upload-image/upload-image.component';


import { DeliveryPageComponent } from "./orders/delivery-page/delivery-page.component";
import { DeliveryViewComponent } from "./orders/delivery-page/delivery-view/delivery-view.component";









@NgModule({
  declarations: [AdminLayoutComponent,
    LoginPageComponent,
    AddPageComponent,

    EditPageComponent,

    ListPageComponent,

    UploadImageComponent,
    DeliveryPageComponent,
    DeliveryViewComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,








    RouterModule.forChild([
      {
        path: 'admin', component: AdminLayoutComponent, children: [
          // { path: '', redirectTo: 'admin', pathMatch: 'full' },
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },


          { path: 'list', component: ListPageComponent, canActivate: [AuthGuard] },
          // { path: 'add', component: AddPageComponent, canActivate: [AuthGuard] },

          { path: 'delivery', component: DeliveryPageComponent, canActivate: [AuthGuard] },

          // { path: 'upload', component: UploadImageComponent, canActivate: [AuthGuard] },
          { path: 'edit/:productId', component: EditPageComponent, canActivate: [AuthGuard] },


          { path: 'view/:orderId', component: DeliveryViewComponent, canActivate: [AuthGuard] },

          { path: '**', redirectTo: 'admin' }
        ]

      },
      { path: 'admin/login', component: LoginPageComponent }
    ])

  ],
  exports: [RouterModule],

})
export class AdminModule { }

