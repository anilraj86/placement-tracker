import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminheaderComponent } from './pages/admin/adminheader/adminheader.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { EmployerListComponent } from './pages/admin/employer-list/employer-list.component';
import { StudentsListComponent } from './pages/admin/students-list/students-list.component';
import { VacanciesComponent } from './pages/admin/vacancies/vacancies.component';
import { VacancyMatchingComponent } from './pages/admin/vacancy-matching/vacancy-matching.component';

const routes: Routes = [
  {path:'adminheader',component:AdminheaderComponent,children:[
    {path:'adminhome',component:AdminhomeComponent},
    {path:'students',component:StudentsListComponent},
    {path:'employers',component:EmployerListComponent},
    {path:'vacancies',component:VacanciesComponent},
    {path:'vacancymatch',component:VacancyMatchingComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
