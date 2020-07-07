import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export * from './sign-in/sign-in.component';
export * from './sign-up/sign-up.component';
export * from './forgot-password/forgot-password.component';

export const AUTH_PAGES = [SignInComponent, SignUpComponent, ForgotPasswordComponent];
