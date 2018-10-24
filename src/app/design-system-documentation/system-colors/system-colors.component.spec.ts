import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemColorsComponent } from './system-colors.component';

describe('SystemColorsComponent', () => {
  let component: SystemColorsComponent;
  let fixture: ComponentFixture<SystemColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
