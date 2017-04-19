import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGraphsComponent } from './stat-graphs.component';

describe('StatGraphsComponent', () => {
  let component: StatGraphsComponent;
  let fixture: ComponentFixture<StatGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
