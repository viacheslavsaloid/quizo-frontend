import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ROOT_ROUTES } from './root.routes';
import { AuthGuard } from 'src/app/guards';

const routes: Routes = [
  {
    path: ROOT_ROUTES.AUTH.path,
    loadChildren: () => import('src/app/modules/auth.module').then((m) => m.AuthModule),
  },
  {
    path: ROOT_ROUTES.ADMIN.path,
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/modules/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: ROOT_ROUTES.AUTH.path,
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
export class RootRoutingModule {}
