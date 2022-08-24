import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
  vacancies:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  editVacancy(vacancies:any){}
  deleteVacancy(id:any){}
}
