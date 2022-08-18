import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentjobstatusComponent } from './studentjobstatus.component';

describe('StudentjobstatusComponent', () => {
  let component: StudentjobstatusComponent;
  let fixture: ComponentFixture<StudentjobstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentjobstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentjobstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
