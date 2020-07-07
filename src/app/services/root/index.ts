import { AuthService } from './auth/auth.service';
import { ApiService } from './api/api.service';
import { PopupService } from './popup/popup.service';
import { NotificationsService } from './notifications/notifications.service';

export * from './auth/auth.service';
export * from './api/api.service';
export * from './popup/popup.service';
export * from './notifications/notifications.service';

export const ROOT_SERVICES = [ApiService, AuthService, PopupService, NotificationsService];
