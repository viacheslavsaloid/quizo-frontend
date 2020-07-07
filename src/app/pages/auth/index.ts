import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export * from './sign-in/sign-in.component';
export * from './sign-up/sign-up.component';
export * from './reset-password/reset-password.component';

export const AUTH_PAGES = [SignInComponent, SignUpComponent, ResetPasswordComponent];
