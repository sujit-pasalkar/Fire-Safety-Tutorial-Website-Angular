import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSprinklerSystemComponent } from './fire-sprinkler-system.component';

describe('FireSprinklerSystemComponent', () => {
  let component: FireSprinklerSystemComponent;
  let fixture: ComponentFixture<FireSprinklerSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireSprinklerSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireSprinklerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
