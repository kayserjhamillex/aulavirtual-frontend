import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing/home',
    pathMatch: 'prefix'
  },
  {
    path: 'landing/**',
    redirectTo: 'landing/404',
  },
  {
    path: 'landing',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '404',
        component: Error404Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
