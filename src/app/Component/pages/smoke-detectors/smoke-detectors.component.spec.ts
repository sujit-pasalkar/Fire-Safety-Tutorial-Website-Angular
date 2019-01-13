import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeDetectorsComponent } from './smoke-detectors.component';

describe('SmokeDetectorsComponent', () => {
  let component: SmokeDetectorsComponent;
  let fixture: ComponentFixture<SmokeDetectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeDetectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeDetectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
