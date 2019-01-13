import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirehydrantsystemComponent } from './firehydrantsystem.component';

describe('FirehydrantsystemComponent', () => {
  let component: FirehydrantsystemComponent;
  let fixture: ComponentFixture<FirehydrantsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirehydrantsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirehydrantsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
