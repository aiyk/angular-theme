import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSystemBaseComponent } from './design-system-base.component';

describe('DesignSystemBaseComponent', () => {
  let component: DesignSystemBaseComponent;
  let fixture: ComponentFixture<DesignSystemBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignSystemBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignSystemBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
