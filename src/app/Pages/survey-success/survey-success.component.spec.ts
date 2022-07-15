import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySuccessComponent } from './survey-success.component';

describe('SurveySuccessComponent', () => {
  let component: SurveySuccessComponent;
  let fixture: ComponentFixture<SurveySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
