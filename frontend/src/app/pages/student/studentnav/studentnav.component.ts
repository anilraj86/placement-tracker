import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import  { MatSidenav} from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentnav',
  templateUrl: './studentnav.component.html',
  styleUrls: ['./studentnav.component.css']
})
export class StudentnavComponent implements AfterViewInit, OnInit{

    @ViewChild(MatSidenav)
   sidenav!: MatSidenav;
  
    constructor(private observer: BreakpointObserver, private changed:ChangeDetectorRef) {}
  
    ngOnInit(): void {
    }
    ngAfterViewInit() {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
      this.changed.detectChanges();
    }
  }
  

