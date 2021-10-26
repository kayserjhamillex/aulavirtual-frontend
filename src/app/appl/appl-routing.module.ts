import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// componentes aplicacion
import { ApplComponent } from './appl.component';
import { TemaComponent } from './tema/tema.component';
import { CoursesComponent } from './courses/courses.component';
import { DashomeComponent } from './dashome/dashome.component';
import { ProfileComponent } from './student/profile/profile.component';
import { TemaDetailComponent } from './tema-detail/tema-detail.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ProfileUpdateComponent } from './student/profile-update/profile-update.component';
// components template
import { CardtemComponent } from './template/cardtem/cardtem.component';
import { ChardtemComponent } from './template/chardtem/chardtem.component';
import { ColortemComponent } from './template/colortem/colortem.component';
import { HomedtemComponent } from './template/homedtem/homedtem.component';
import { OthertemComponent } from './template/othertem/othertem.component';
import { BordertemComponent } from './template/bordertem/bordertem.component';
import { ButtontemComponent } from './template/buttontem/buttontem.component';
import { TablesdtemComponent } from './template/tablesdtem/tablesdtem.component';
import { AnimationtemComponent } from './template/animationtem/animationtem.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ApplComponent,
    children: [
      {
        path: 'home',
        component: DashomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'profileupdate',
        component: ProfileUpdateComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'coursedetail/:id',
        component: CourseDetailComponent
      },
      {
        path: 'temas/:id',
        component: TemaComponent
      },
      {
        path: 'tema-detail/:id',
        component: TemaDetailComponent
      },
      // aca van los templates
      {
        path: 'template/animation',
        component: AnimationtemComponent
      },
      {
        path: 'template/border',
        component: BordertemComponent
      },
      {
        path: 'template/button',
        component: ButtontemComponent
      },
      {
        path: 'template/card',
        component: CardtemComponent
      },
      {
        path: 'template/chard',
        component: ChardtemComponent
      },
      {
        path: 'template/color',
        component: ColortemComponent
      },
      {
        path: 'template/home',
        component: HomedtemComponent
      },
      {
        path: 'template/other',
        component: OthertemComponent
      },
      {
        path: 'template/tables',
        component: TablesdtemComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplRoutingModule { }
