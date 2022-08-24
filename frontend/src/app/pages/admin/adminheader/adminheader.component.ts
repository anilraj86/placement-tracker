import { AfterViewInit,ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{ BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements AfterViewInit,OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer:BreakpointObserver, private changed:ChangeDetectorRef,
    private rout:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  homeClick()
  {
    this.rout.navigate(['adminhome'],{relativeTo:this.route});
  }
  studntClick(){
    this.rout.navigate(['students'],{relativeTo:this.route});
  }
  employerClick(){
    this.rout.navigate(['employers'],{relativeTo:this.route});
  }
  vacancyClick(){
    this.rout.navigate(['vacancies'],{relativeTo:this.route});
  }
  matchClick(){
    this.rout.navigate(['vacancymatch'],{relativeTo:this.route});
  }
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }
      else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
    this.changed.detectChanges();
  }

}
