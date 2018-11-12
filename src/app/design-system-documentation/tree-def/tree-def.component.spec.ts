import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDefComponent } from './tree-def.component';

describe('TreeDefComponent', () => {
  let component: TreeDefComponent;
  let fixture: ComponentFixture<TreeDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
