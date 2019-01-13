import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireAlarmSystemComponent } from './fire-alarm-system.component';

describe('FireAlarmSystemComponent', () => {
  let component: FireAlarmSystemComponent;
  let fixture: ComponentFixture<FireAlarmSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireAlarmSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireAlarmSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
