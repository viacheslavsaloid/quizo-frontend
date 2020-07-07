import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/containers/admin/admin.component';
import { DashboardComponent } from 'src/app/pages/admin';
import { ADMIN_ROUTES } from './auth.routes';

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
        path: ADMIN_ROUTES.DASHBOARD.path,
        component: DashboardComponent,
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
