import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';

const ROOT_PATH = '';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
