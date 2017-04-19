import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFiltersComponent } from './video-filters.component';

describe('VideoFiltersComponent', () => {
  let component: VideoFiltersComponent;
  let fixture: ComponentFixture<VideoFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
