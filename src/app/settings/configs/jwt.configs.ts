import { environment } from 'src/environments/environment';

export function tokenGetter() {
  const configs = localStorage.getItem('configs');
  const data = JSON.parse(configs);
  return data?.token;
}

export const JWT_CONFIGS = {
  config: {
    tokenGetter,
    whitelistedDomains: environment.jwtWhitelist,
  },
};
