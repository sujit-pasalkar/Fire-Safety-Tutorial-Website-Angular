import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortablefireextinguisherComponent } from './portablefireextinguisher.component';

describe('PortablefireextinguisherComponent', () => {
  let component: PortablefireextinguisherComponent;
  let fixture: ComponentFixture<PortablefireextinguisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortablefireextinguisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortablefireextinguisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
