import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRiserSystemComponent } from './fire-riser-system.component';

describe('FireRiserSystemComponent', () => {
  let component: FireRiserSystemComponent;
  let fixture: ComponentFixture<FireRiserSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireRiserSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireRiserSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
