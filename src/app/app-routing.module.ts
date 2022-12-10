import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/authentication/feature/src/lib/guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashbaord/dashbaord.module').then(
        (m) => m.DashbaordModule
      ),
      canActivate: [AuthenticationGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/authentication/feature/src').then(m => m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
