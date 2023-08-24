import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationContendCardComponent } from './location-contend-card.component';

describe('LocationContendCardComponent', () => {
  let component: LocationContendCardComponent;
  let fixture: ComponentFixture<LocationContendCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationContendCardComponent]
    });
    fixture = TestBed.createComponent(LocationContendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
