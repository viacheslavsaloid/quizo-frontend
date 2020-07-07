import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'app/containers/auth/auth.component';
import { AUTH_ROUTES } from './auth.routes';
import { SignInComponent, SignUpComponent, ForgotPasswordComponent } from 'app/pages/auth';

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
        path: AUTH_ROUTES.FORGOT_PASSWORD.path,
        component: ForgotPasswordComponent,
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
