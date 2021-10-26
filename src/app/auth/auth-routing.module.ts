import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'recover',
        component: RecoverComponent,
      },
      {
        path: 'password/:id',
        component: PasswordComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
