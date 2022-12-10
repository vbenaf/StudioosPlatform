import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './components/dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

const DASHBOARD_COMPONENTS = [DashboardContainerComponent];

@NgModule({
  declarations: [...DASHBOARD_COMPONENTS],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
