import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/utils/services/crud.service';
import { ApiService, AppPopupService } from '../../core';
import { User } from 'src/app/models/admin';
import { environment } from 'src/environments/environment';
import { UsersState } from 'src/app/store/states/admin';
import { Router } from '@angular/router';
import { ADMIN_ROUTES } from 'src/app/routes/admin/auth.routes';

@Injectable()
export class UsersService extends CrudService<User> {
  constructor(
    protected _apiService: ApiService,
    protected _router: Router,
    protected _usersState: UsersState,
    protected _appPopupService: AppPopupService
  ) {
    super(
      _apiService,
      _appPopupService,
      _usersState,
      _router,
      environment.usersEndpoint,
      ADMIN_ROUTES.USERS.fullPath,
      'user'
    );
  }
}
