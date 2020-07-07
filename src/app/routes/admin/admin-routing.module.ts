import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'app/containers/admin/admin.component';
import {
  DashboardComponent,
  ContactsComponent,
  ContactComponent,
  ProductsComponent,
  ProductComponent,
  UsersComponent,
} from 'app/pages/admin';
import { ADMIN_ROUTES } from './auth.routes';
import { ContactsService, ProductsService } from 'app/services/admin';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: ADMIN_ROUTES.DASHBOARD.path,
        pathMatch: 'full',
      },
      {
        path: ADMIN_ROUTES.DASHBOARD.path,
        component: DashboardComponent,
      },
      {
        path: ADMIN_ROUTES.CONTACTS.path,
        component: ContactsComponent,
        resolve: {
          contacts: ContactsService,
        },
      },
      {
        path: ADMIN_ROUTES.CONTACT.path,
        component: ContactComponent,
      },
      {
        path: ADMIN_ROUTES.PRODUCTS.path,
        component: ProductsComponent,
        resolve: {
          contacts: ProductsService,
        },
      },
      {
        path: ADMIN_ROUTES.USERS.path,
        component: UsersComponent,
        resolve: {
          contacts: ContactsService,
        },
      },
      {
        path: ADMIN_ROUTES.PRODUCT.path,
        component: ProductComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
