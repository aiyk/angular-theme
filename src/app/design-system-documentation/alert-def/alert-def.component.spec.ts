import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDefComponent } from './alert-def.component';

describe('AlertDefComponent', () => {
  let component: AlertDefComponent;
  let fixture: ComponentFixture<AlertDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
