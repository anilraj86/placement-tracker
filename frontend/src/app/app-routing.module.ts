import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { EmployerListComponent } from './pages/admin/employer-list/employer-list.component';
import { StudentsListComponent } from './pages/admin/students-list/students-list.component';
import { VacanciesComponent } from './pages/admin/vacancies/vacancies.component';
import { VacancyMatchingComponent } from './pages/admin/vacancy-matching/vacancy-matching.component';
import { StudentnavComponent } from './pages/student/studentnav/studentnav.component';
import { StudentprofileComponent } from './pages/student/studentprofile/studentprofile.component';
import { StudentjobvacancyComponent } from './pages/student/studentjobvacancy/studentjobvacancy.component';
import { StudentjobappliedComponent } from './pages/student/studentjobapplied/studentjobapplied.component';
import { StudentjobstatusComponent } from './pages/student/studentjobstatus/studentjobstatus.component';
import { StudentdashboardComponent } from './pages/student/studentdashboard/studentdashboard.component';


const routes: Routes = [
  {path:'adminhome',component:AdminhomeComponent},
  {path:'students',component:StudentsListComponent},
  {path:'employers',component:EmployerListComponent},
  {path:'vacancies',component:VacanciesComponent},
  {path:'vacancymatch',component:VacancyMatchingComponent},
  {
    path:'student',component:StudentnavComponent,
    children:[
      {path:'dashboard',component:StudentdashboardComponent},
      {path:'profile',component:StudentprofileComponent},
      {path:'vacancy',component:StudentjobvacancyComponent},
      {path:'applied',component:StudentjobappliedComponent},
      {path:'status',component:StudentjobstatusComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
