import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermLogoutComponent } from './conferm-logout.component';

describe('ConfermLogoutComponent', () => {
  let component: ConfermLogoutComponent;
  let fixture: ComponentFixture<ConfermLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfermLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfermLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
