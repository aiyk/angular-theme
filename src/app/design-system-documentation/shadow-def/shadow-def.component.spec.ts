import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDefComponent } from './shadow-def.component';

describe('ShadowDefComponent', () => {
  let component: ShadowDefComponent;
  let fixture: ComponentFixture<ShadowDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
