import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafanadashComponent } from './grafanadash.component';

describe('GrafanadashComponent', () => {
  let component: GrafanadashComponent;
  let fixture: ComponentFixture<GrafanadashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrafanadashComponent]
    });
    fixture = TestBed.createComponent(GrafanadashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
