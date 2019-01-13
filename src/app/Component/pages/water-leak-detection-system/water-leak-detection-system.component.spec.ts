import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterLeakDetectionSystemComponent } from './water-leak-detection-system.component';

describe('WaterLeakDetectionSystemComponent', () => {
  let component: WaterLeakDetectionSystemComponent;
  let fixture: ComponentFixture<WaterLeakDetectionSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterLeakDetectionSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterLeakDetectionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
