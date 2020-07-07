import { AuthService } from './auth/auth.service';
import { ApiService } from './api/api.service';
import { AppPopupService } from './app-popup/app-popup.service';
import { AppNotificationService } from './app-notification/app-notification.service';
import { AppFormlyService } from './app-formly/app-formly.service';
import { AppConfigsService } from './app-configs/app-configs.service';

export * from './auth/auth.service';
export * from './api/api.service';
export * from './app-popup/app-popup.service';
export * from './app-notification/app-notification.service';
export * from './app-formly/app-formly.service';
export * from './app-configs/app-configs.service';

export const CORE_SERVICES = [
  ApiService,
  AuthService,
  AppPopupService,
  AppNotificationService,
  AppFormlyService,
  AppConfigsService,
];
