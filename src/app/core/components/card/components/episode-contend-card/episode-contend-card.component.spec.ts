import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeContendCardComponent } from './episode-contend-card.component';

describe('EpisodeContendCardComponent', () => {
  let component: EpisodeContendCardComponent;
  let fixture: ComponentFixture<EpisodeContendCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeContendCardComponent]
    });
    fixture = TestBed.createComponent(EpisodeContendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
