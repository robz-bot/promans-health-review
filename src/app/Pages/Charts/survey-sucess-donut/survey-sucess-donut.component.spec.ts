import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySucessDonutComponent } from './survey-sucess-donut.component';

describe('SurveySucessDonutComponent', () => {
  let component: SurveySucessDonutComponent;
  let fixture: ComponentFixture<SurveySucessDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveySucessDonutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySucessDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
