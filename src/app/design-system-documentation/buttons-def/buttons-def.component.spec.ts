import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDefComponent } from './buttons-def.component';

describe('ButtonsDefComponent', () => {
  let component: ButtonsDefComponent;
  let fixture: ComponentFixture<ButtonsDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
