import { environment } from 'environments/environment';

export const NGXS_CONFIGS = {
  developmentMode: !environment.production,
};
