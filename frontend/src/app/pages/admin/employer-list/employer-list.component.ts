import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  employers:any=[];

  constructor() { }

  

  ngOnInit(): void {
  }

  disableEmployee(id:any){

  }
  editEmployers(employers:any){

  }

}
