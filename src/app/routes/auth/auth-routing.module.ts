import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/containers/auth/auth.component';
import { AUTH_ROUTES } from './auth.routes';
import { AuthPageComponent } from 'src/app/pages/auth';
import { AuthType } from 'src/app/models/auth/auth-type';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: AUTH_ROUTES.SIGN_IN.path,
        pathMatch: 'full',
      },
      {
        path: AUTH_ROUTES.SIGN_IN.path,
        component: AuthPageComponent,
        data: {
          type: AuthType.SIGN_IN,
        },
      },
      {
        path: AUTH_ROUTES.SIGN_UP.path,
        component: AuthPageComponent,
        data: {
          type: AuthType.SIGN_UP,
        },
      },
      {
        path: AUTH_ROUTES.RESTORE_PASSWORD.path,
        component: AuthPageComponent,
        data: {
          type: AuthType.RESTORE_PASSWORD,
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
