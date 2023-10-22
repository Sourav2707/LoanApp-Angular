import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditTrackerComponent } from './credit-tracker.component';

describe('CreditTrackerComponent', () => {
  let component: CreditTrackerComponent;
  let fixture: ComponentFixture<CreditTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditTrackerComponent]
    });
    fixture = TestBed.createComponent(CreditTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
