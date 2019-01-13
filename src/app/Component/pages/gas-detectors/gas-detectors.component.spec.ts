import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasDetectorsComponent } from './gas-detectors.component';

describe('GasDetectorsComponent', () => {
  let component: GasDetectorsComponent;
  let fixture: ComponentFixture<GasDetectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasDetectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasDetectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
