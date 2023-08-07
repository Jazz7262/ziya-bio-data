import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInsightsComponent } from './professional-insights.component';

describe('ProfessionalInsightsComponent', () => {
  let component: ProfessionalInsightsComponent;
  let fixture: ComponentFixture<ProfessionalInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalInsightsComponent]
    });
    fixture = TestBed.createComponent(ProfessionalInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
