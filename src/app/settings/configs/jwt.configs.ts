import { environment } from 'src/environments/environment';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export const JWT_CONFIGS = {
  config: {
    tokenGetter,
    whitelistedDomains: environment.jwtWhitelist,
  },
};
