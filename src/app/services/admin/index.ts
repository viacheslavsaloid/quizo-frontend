import { ContactsService } from './contacts/contacts.service';
import { ProductsService } from './products/products.service';

export * from './contacts/contacts.service';
export * from './products/products.service';

export const ADMIN_SERVICES = [ContactsService, ProductsService];
