import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesRmComponent } from './episodes-rm.component';

describe('EpisodesRmComponent', () => {
  let component: EpisodesRmComponent;
  let fixture: ComponentFixture<EpisodesRmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodesRmComponent]
    });
    fixture = TestBed.createComponent(EpisodesRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
