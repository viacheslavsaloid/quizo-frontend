import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/containers/admin/admin.component';
import { DashboardComponent, HomeComponent, SettingsComponent } from 'src/app/pages/admin';
import { ADMIN_ROUTES } from './auth.routes';
import { UserComponent } from 'src/app/pages/admin/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: ADMIN_ROUTES.DASHBOARD.path,
        pathMatch: 'full',
      },
      {
        path: ADMIN_ROUTES.HOME.path,
        component: HomeComponent,
      },
      {
        path: ADMIN_ROUTES.DASHBOARD.path,
        component: DashboardComponent,
      },
      {
        path: ADMIN_ROUTES.SETTINGS.path,
        component: SettingsComponent,
      },
      {
        path: ADMIN_ROUTES.USER.path,
        component: UserComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
