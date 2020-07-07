import { environment } from 'src/environments/environment';

export const NGXS_CONFIGS = {
  developmentMode: !environment.production,
};
