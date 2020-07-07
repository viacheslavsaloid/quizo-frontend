import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

export * from './dashboard/dashboard.component';
export * from './contacts/contacts.component';
export * from './contact/contact.component';
export * from './products/products.component';
export * from './product/product.component';
export * from './users/users.component';

export const ADMIN_PAGES = [
  DashboardComponent,
  ContactsComponent,
  ContactComponent,
  ProductsComponent,
  ProductComponent,
  UsersComponent,
];
