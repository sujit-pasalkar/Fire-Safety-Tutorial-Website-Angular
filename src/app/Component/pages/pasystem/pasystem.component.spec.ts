import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PASystemComponent } from './pasystem.component';

describe('PASystemComponent', () => {
  let component: PASystemComponent;
  let fixture: ComponentFixture<PASystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PASystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PASystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
