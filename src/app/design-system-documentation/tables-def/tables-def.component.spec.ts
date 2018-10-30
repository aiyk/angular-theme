import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDefComponent } from './tables-def.component';

describe('TablesDefComponent', () => {
  let component: TablesDefComponent;
  let fixture: ComponentFixture<TablesDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
