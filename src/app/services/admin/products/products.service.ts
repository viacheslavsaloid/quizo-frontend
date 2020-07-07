import { Injectable } from '@angular/core';
import { CrudService } from 'app/utils/services/crud.service';
import { ApiService, PopupService } from 'app/services/root';
import { Product } from 'app/models/admin';
import { ProductsState } from 'app/store/states/admin';
import { AppState } from 'app/models/store';

import {
  OpenModalFormArgs,
  OpenModalResponse,
  OpenModalAndAddOneResponse,
  PopupAction,
} from 'app/models/components/popup';

import { environment } from 'environments/environment';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'app/routes/admin/auth.routes';

@Injectable()
export class ProductsService extends CrudService<Product> {
  public dialogRef: any;

  constructor(
    _apiService: ApiService,
    private _router: Router,
    private _productsState: ProductsState,
    private _popupService: PopupService
  ) {
    super(_apiService);
  }

  get url(): string {
    return environment.productsEndpoint;
  }

  get state(): AppState<Product> {
    return this._productsState;
  }

  public navitageToContact() {
    this._router.navigate([ADMIN_ROUTES.PRODUCT.fullPath]);
  }

  public async openModal(args?: OpenModalFormArgs): OpenModalResponse<Product> {
    return this._popupService.openModalForm({
      panelClass: 'contact-form-dialog',
      translateTitle: 'CONTACTS.TITLE',
      fields: 'contact',
    });
  }

  public async openModalAndAddOne(): OpenModalAndAddOneResponse<Product> {
    const res = await this.openModal();

    if (res?.action === PopupAction.SUBMIT) {
      const value = res.data;
      return this.addOne({ value });
    }
  }
}
