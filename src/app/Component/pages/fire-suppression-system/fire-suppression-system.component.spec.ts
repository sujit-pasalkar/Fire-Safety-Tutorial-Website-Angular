import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSuppressionSystemComponent } from './fire-suppression-system.component';

describe('FireSuppressionSystemComponent', () => {
  let component: FireSuppressionSystemComponent;
  let fixture: ComponentFixture<FireSuppressionSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSuppressionSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireSuppressionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
