import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/containers/auth/auth.component';
import { AUTH_ROUTES } from './auth.routes';
import { SignInComponent, SignUpComponent, ResetPasswordComponent } from 'src/app/pages/auth';

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
        component: SignInComponent,
      },
      {
        path: AUTH_ROUTES.SIGN_UP.path,
        component: SignUpComponent,
      },
      {
        path: AUTH_ROUTES.RESET_PASSWORD.path,
        component: ResetPasswordComponent,
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
