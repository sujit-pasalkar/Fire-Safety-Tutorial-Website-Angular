import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvComponent } from './cctv.component';

describe('CctvComponent', () => {
  let component: CctvComponent;
  let fixture: ComponentFixture<CctvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CctvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CctvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
