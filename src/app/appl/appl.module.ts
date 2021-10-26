import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplRoutingModule } from './appl-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TemaDetailComponent } from './tema-detail/tema-detail.component';
import { TemaComponent } from './tema/tema.component';
import { ProfileComponent } from './student/profile/profile.component';
import { ProfileUpdateComponent } from './student/profile-update/profile-update.component';
import { ApplComponent } from './appl.component';
import { DashHeaderComponent } from './component/dash-header/dash-header.component';
import { DashFooterComponent } from './component/dash-footer/dash-footer.component';
import { DashSidebarComponent } from './component/dash-sidebar/dash-sidebar.component';
import { RatingComponent } from './rating/rating.component';
import { ButtontemComponent } from './template/buttontem/buttontem.component';
import { CardtemComponent } from './template/cardtem/cardtem.component';
import { ColortemComponent } from './template/colortem/colortem.component';
import { BordertemComponent } from './template/bordertem/bordertem.component';
import { AnimationtemComponent } from './template/animationtem/animationtem.component';
import { OthertemComponent } from './template/othertem/othertem.component';
import { ChardtemComponent } from './template/chardtem/chardtem.component';
import { TablesdtemComponent } from './template/tablesdtem/tablesdtem.component';
import { HomedtemComponent } from './template/homedtem/homedtem.component';
import { DashomeComponent } from './dashome/dashome.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatAnswerComponent } from './chat-answer/chat-answer.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { ResumenotificationComponent } from './resumenotification/resumenotification.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent,
    TemaDetailComponent,
    TemaComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    ApplComponent,
    DashHeaderComponent,
    DashFooterComponent,
    DashSidebarComponent,
    RatingComponent,
    ButtontemComponent,
    CardtemComponent,
    ColortemComponent,
    BordertemComponent,
    AnimationtemComponent,
    OthertemComponent,
    ChardtemComponent,
    TablesdtemComponent,
    HomedtemComponent,
    DashomeComponent,
    ChatListComponent,
    ChatAnswerComponent,
    ChatDetailComponent,
    NotificationComponent,
    ResumenotificationComponent
  ],
  imports: [
    CommonModule,
    ApplRoutingModule
  ]
})
export class ApplModule { }
