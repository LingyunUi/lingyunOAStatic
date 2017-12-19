///<reference path="dashboard/dashboard.component.ts"/>
///<reference path="home-punchclock/home-punchclock.component.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HomeSmallBoxComponent } from './home-small-box/home-small-box.component';
import { HomeTaskComponent } from './home-task/home-task.component';
import { HomeChatComponent } from './home-chat/home-chat.component';
import { HomeCalendarComponent } from './home-calendar/home-calendar.component';

import { Routes, RouterModule } from '@angular/router';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeTaskSComponent } from './home-task-s/home-task-s.component';
import { HomeChatSComponent } from './home-chat-s/home-chat-s.component';
import { HomeCalendarSComponent } from './home-calendar-s/home-calendar-s.component';
import { HomeVacationComponent } from './home-vacation/home-vacation.component';
import { HomeVacationSComponent } from './home-vacation-s/home-vacation-s.component';
import { HomePunchclockComponent } from './home-punchclock/home-punchclock.component';
import { HomeWorkattendanceComponent } from './home-workattendance/home-workattendance.component';
import { HomeWorkattendanceMineComponent } from './home-workattendance-mine/home-workattendance-mine.component';
import { HomeWorkattendanceDayComponent } from './home-workattendance-day/home-workattendance-day.component';
import { HomeWorkattendanceMonthComponent } from './home-workattendance-month/home-workattendance-month.component';
import { HomeTaskDetailComponent } from './home-task-detail/home-task-detail.component';
import { HomeVacationS2Component } from './home-vacation-s2/home-vacation-s2.component';
import { HomeVacationS3Component } from './home-vacation-s3/home-vacation-s3.component';
import { HomeVacationS4Component } from './home-vacation-s4/home-vacation-s4.component';
import { HomeVacationS5Component } from './home-vacation-s5/home-vacation-s5.component';
import { HomePersonalmattersComponent } from './home-personalmatters/home-personalmatters.component';
import { HomePersonalmattersS1Component } from './home-personalmatters-s1/home-personalmatters-s1.component';
import { HomePersonalmattersS2Component } from './home-personalmatters-s2/home-personalmatters-s2.component';
import { HomePersonalmattersS3Component } from './home-personalmatters-s3/home-personalmatters-s3.component';
import { HomePersonalmattersS4Component } from './home-personalmatters-s4/home-personalmatters-s4.component';

const routes: Routes = [
  {path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home-chat', component: HomeChatComponent},
  {path: 'home-task', component: HomeTaskComponent},
  {path: 'home-task-detail', component: HomeTaskDetailComponent},
  {path: 'home-calendar', component: HomeCalendarComponent},
  {path: 'home-vacation', component: HomeVacationComponent},
  {path: 'home-personalmatters', component: HomePersonalmattersComponent},
  {path: 'home-punchclock', component: HomePunchclockComponent},
  {path: 'home-workattendance', component: HomeWorkattendanceComponent,children:[
      {path: '', component: HomeWorkattendanceMineComponent},
      {path: 'home-workattendance-mine', component: HomeWorkattendanceMineComponent},
      {path: 'home-workattendance-day', component: HomeWorkattendanceDayComponent},
      {path: 'home-workattendance-month', component: HomeWorkattendanceMonthComponent}
    ]},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    HomeSmallBoxComponent,
    HomeTaskComponent,
    HomeChatComponent,
    ContentHeaderComponent,
    HomeCalendarComponent,
    ContentBodyComponent,
    DashboardComponent,
    HomeTaskSComponent,
    HomeChatSComponent,
    HomeCalendarSComponent,
    HomeVacationComponent,
    HomeVacationSComponent,
    HomePunchclockComponent,
    HomeWorkattendanceComponent,
    HomeWorkattendanceMineComponent,
    HomeWorkattendanceDayComponent,
    HomeWorkattendanceMonthComponent,
    HomeTaskDetailComponent,
    HomeVacationS2Component,
    HomeVacationS3Component,
    HomeVacationS4Component,
    HomeVacationS5Component,
    HomePersonalmattersComponent,
    HomePersonalmattersS1Component,
    HomePersonalmattersS2Component,
    HomePersonalmattersS3Component,
    HomePersonalmattersS4Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
