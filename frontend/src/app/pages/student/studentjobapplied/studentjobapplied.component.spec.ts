import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentjobappliedComponent } from './studentjobapplied.component';

describe('StudentjobappliedComponent', () => {
  let component: StudentjobappliedComponent;
  let fixture: ComponentFixture<StudentjobappliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentjobappliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentjobappliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
