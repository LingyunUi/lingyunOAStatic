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
import { HomeVacationSComponent } from './home-vacation/home-vacation-s/home-vacation-s.component';
import { HomePunchclockComponent } from './home-punchclock/home-punchclock.component';
import { HomeWorkattendanceComponent } from './home-workattendance/home-workattendance.component';
import { HomeWorkattendanceMineComponent } from './home-workattendance/home-workattendance-mine/home-workattendance-mine.component';
import { HomeWorkattendanceDayComponent } from './home-workattendance/home-workattendance-day/home-workattendance-day.component';
import { HomeWorkattendanceMonthComponent } from './home-workattendance/home-workattendance-month/home-workattendance-month.component';
import { HomeTaskDetailComponent } from './home-task-detail/home-task-detail.component';
import { HomeVacationS2Component } from './home-vacation/home-vacation-s2/home-vacation-s2.component';
import { HomeVacationS3Component } from './home-vacation/home-vacation-s3/home-vacation-s3.component';
import { HomeVacationS4Component } from './home-vacation/home-vacation-s4/home-vacation-s4.component';
import { HomeVacationS5Component } from './home-vacation/home-vacation-s5/home-vacation-s5.component';
import { HomePersonalmattersComponent } from './home-personalmatters/home-personalmatters.component';
import { HomePersonalmattersS1Component } from './home-personalmatters/home-personalmatters-s1/home-personalmatters-s1.component';
import { HomePersonalmattersS2Component } from './home-personalmatters/home-personalmatters-s2/home-personalmatters-s2.component';
import { HomePersonalmattersS3Component } from './home-personalmatters/home-personalmatters-s3/home-personalmatters-s3.component';
import { HomeFinanceComponent } from './home-finance/home-finance.component';
import { HomePersonalmattersS4Component } from './home-personalmatters/home-personalmatters-s4/home-personalmatters-s4.component';
import { HomeFinanceS1Component } from './home-finance/home-finance-s1/home-finance-s1.component';
import { HomeFinanceS2Component } from './home-finance/home-finance-s2/home-finance-s2.component';
import { HomeFinanceS3Component } from './home-finance/home-finance-s3/home-finance-s3.component';
import { HomeFinanceS4Component } from './home-finance/home-finance-s4/home-finance-s4.component';
import { HomeAdministrationComponent } from './home-administration/home-administration.component';
import { HomeAdministrationS1Component } from './home-administration/home-administration-s1/home-administration-s1.component';
import { HomeAdministrationS2Component } from './home-administration/home-administration-s2/home-administration-s2.component';
import { HomeAdministrationS3Component } from './home-administration/home-administration-s3/home-administration-s3.component';
import { HomeAdministrationS4Component } from './home-administration/home-administration-s4/home-administration-s4.component';
import { HomeOthersComponent } from './home-others/home-others.component';
import { HomeOthersS1Component } from './home-others/home-others-s1/home-others-s1.component';
import { HomeOthersS2Component } from './home-others/home-others-s2/home-others-s2.component';
import { HomePersonslistComponent } from './home-personslist/home-personslist.component';
import { HomeTechnologyfileComponent } from './home-technologyfile/home-technologyfile.component';
import { HomeCompanyfileComponent } from './home-companyfile/home-companyfile.component';
import {HttpModule} from '@angular/http';

import 'rxjs/Rx';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '',  redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home-chat', component: HomeChatComponent},
  {path: 'home-task', component: HomeTaskComponent},
  {path: 'home-task-detail', component: HomeTaskDetailComponent},
  {path: 'home-calendar', component: HomeCalendarComponent},
  {path: 'home-vacation', component: HomeVacationComponent},
  {path: 'home-personalmatters', component: HomePersonalmattersComponent},
  {path: 'home-finance', component: HomeFinanceComponent},
  {path: 'home-administration', component: HomeAdministrationComponent},
  {path: 'home-others', component: HomeOthersComponent},
  {path: 'home-punchclock', component: HomePunchclockComponent},
  {path: 'home-personslist', component: HomePersonslistComponent},
  {path: 'home-technologyfile', component: HomeTechnologyfileComponent},
  {path: 'home-companyfile', component: HomeCompanyfileComponent},
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
    HomePersonalmattersS4Component,
    HomeFinanceComponent,
    HomeFinanceS1Component,
    HomeFinanceS2Component,
    HomeFinanceS3Component,
    HomeFinanceS4Component,
    HomeAdministrationComponent,
    HomeAdministrationS1Component,
    HomeAdministrationS2Component,
    HomeAdministrationS3Component,
    HomeAdministrationS4Component,
    HomeOthersComponent,
    HomeOthersS1Component,
    HomeOthersS2Component,
    HomePersonslistComponent,
    HomeTechnologyfileComponent,
    HomeCompanyfileComponent,
    RegisterComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
