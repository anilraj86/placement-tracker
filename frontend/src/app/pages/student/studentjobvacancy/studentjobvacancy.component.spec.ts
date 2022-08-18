import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentjobvacancyComponent } from './studentjobvacancy.component';

describe('StudentjobvacancyComponent', () => {
  let component: StudentjobvacancyComponent;
  let fixture: ComponentFixture<StudentjobvacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentjobvacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentjobvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
