import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicInsightsComponent } from './islamic-insights.component';

describe('IslamicInsightsComponent', () => {
  let component: IslamicInsightsComponent;
  let fixture: ComponentFixture<IslamicInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IslamicInsightsComponent]
    });
    fixture = TestBed.createComponent(IslamicInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
