import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualCardComponent } from './manual-card.component';

describe('ManualCardComponent', () => {
  let component: ManualCardComponent;
  let fixture: ComponentFixture<ManualCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualCardComponent]
    });
    fixture = TestBed.createComponent(ManualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
