import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/authentication/feature/src/lib/guards/authentication.guard';
import { RedirectAuthGuard } from './core/authentication/feature/src/lib/guards/redirect-auth.guard';

const ROOT_PATH = '';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/authentication/feature/src').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [RedirectAuthGuard],
  },
  {
    path: ROOT_PATH,
    loadChildren: () =>
      import('./modules/dashboard/feature/src').then((m) => m.DashboardModule),
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule {}
