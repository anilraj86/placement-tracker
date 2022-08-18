import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from'@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { EmployerListComponent } from './pages/admin/employer-list/employer-list.component';
import { StudentsListComponent } from './pages/admin/students-list/students-list.component';
import { VacanciesComponent } from './pages/admin/vacancies/vacancies.component';
import { VacancyMatchingComponent } from './pages/admin/vacancy-matching/vacancy-matching.component';
import { AdminheaderComponent } from './pages/admin/adminheader/adminheader.component';
import { StudentdashboardComponent } from './pages/student/studentdashboard/studentdashboard.component';
import { StudentjobappliedComponent } from './pages/student/studentjobapplied/studentjobapplied.component';
import { StudentjobstatusComponent } from './pages/student/studentjobstatus/studentjobstatus.component';
import { StudentjobvacancyComponent } from './pages/student/studentjobvacancy/studentjobvacancy.component';
import { StudentprofileComponent } from './pages/student/studentprofile/studentprofile.component';
import { StudentnavComponent } from './pages/student/studentnav/studentnav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    EmployerListComponent,
    StudentsListComponent,
    VacanciesComponent,
    VacancyMatchingComponent,
    AdminheaderComponent,
    StudentdashboardComponent,
    StudentjobappliedComponent,
    StudentjobstatusComponent,
    StudentjobvacancyComponent,
    StudentprofileComponent,
    StudentnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
