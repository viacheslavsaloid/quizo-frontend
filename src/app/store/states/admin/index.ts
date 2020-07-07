import { ContactsState } from './contacts.state';
import { ProductsState } from './products.state';

export * from './contacts.state';
export * from './products.state';

export const ADMIN_STATES = [ContactsState, ProductsState];
