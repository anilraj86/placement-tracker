import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  editStudents(stdents:any){}
  disableStudents(id:any){}
}
