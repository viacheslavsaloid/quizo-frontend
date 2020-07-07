import { State } from '@ngxs/store';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { Injectable } from '@angular/core';
import { User } from 'app/models/auth';

@StateRepository()
@State<User>({
  name: 'auth',
  defaults: null,
})
@Injectable()
export class AuthState extends NgxsDataRepository<User> {
  @DataAction() login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.ctx.setState(() => user);
  }

  @DataAction() logout() {
    localStorage.setItem('user', null);
    this.ctx.setState(() => null);
  }
}
