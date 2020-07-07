import { environment } from 'src/environments/environment';

export function tokenGetter() {
  return JSON.parse(localStorage.getItem('configs') || `{ token: '' }`).token;
}

export const JWT_CONFIGS = {
  config: {
    tokenGetter,
    whitelistedDomains: environment.jwtWhitelist,
  },
};
