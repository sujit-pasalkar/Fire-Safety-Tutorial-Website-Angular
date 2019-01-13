import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireEscapesComponent } from './fire-escapes.component';

describe('FireEscapesComponent', () => {
  let component: FireEscapesComponent;
  let fixture: ComponentFixture<FireEscapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireEscapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireEscapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
