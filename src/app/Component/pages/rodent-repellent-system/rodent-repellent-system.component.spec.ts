import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodentRepellentSystemComponent } from './rodent-repellent-system.component';

describe('RodentRepellentSystemComponent', () => {
  let component: RodentRepellentSystemComponent;
  let fixture: ComponentFixture<RodentRepellentSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodentRepellentSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodentRepellentSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
