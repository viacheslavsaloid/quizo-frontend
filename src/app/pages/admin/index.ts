import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

export * from './dashboard/dashboard.component';
export * from './home/home.component';
export * from './settings/settings.component';

export const ADMIN_PAGES = [DashboardComponent, HomeComponent, SettingsComponent];
