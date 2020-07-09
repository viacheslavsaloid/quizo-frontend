import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CORE_ROUTES } from './core.routes';
import { AuthGuard } from 'src/app/guards';

const routes: Routes = [
  {
    path: CORE_ROUTES.AUTH.path,
    loadChildren: () => import('src/app/modules/auth.module').then((m) => m.AuthModule),
  },
  {
    path: CORE_ROUTES.ADMIN.path,
    canActivate: [AuthGuard],
    data: { expectedRole: 'company' },
    loadChildren: () => import('src/app/modules/admin.module').then((m) => m.AdminModule),
  },
  {
    path: CORE_ROUTES.CLIENT.path,
    loadChildren: () => import('src/app/modules/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    redirectTo: CORE_ROUTES.CLIENT.path,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
