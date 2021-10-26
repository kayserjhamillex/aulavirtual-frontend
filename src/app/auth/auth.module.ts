import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { PasswordComponent } from './password/password.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverComponent, PasswordComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
