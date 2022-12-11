import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


const AUTHENTICATION_COMPONENTS = [SignupComponent, LoginComponent];

@NgModule({
  declarations: [...AUTHENTICATION_COMPONENTS],
  imports: [CommonModule,AuthenticationRoutingModule],
})
export class AuthenticationModule {}
