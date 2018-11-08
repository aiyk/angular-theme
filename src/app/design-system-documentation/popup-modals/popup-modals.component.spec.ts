import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupModalsComponent } from './popup-modals.component';

describe('PopupModalsComponent', () => {
  let component: PopupModalsComponent;
  let fixture: ComponentFixture<PopupModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
