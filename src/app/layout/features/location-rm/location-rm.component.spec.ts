import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationRMComponent } from './location-rm.component';

describe('LocationsRMComponent', () => {
  let component: LocationRMComponent;
  let fixture: ComponentFixture<LocationRMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationRMComponent]
    });
    fixture = TestBed.createComponent(LocationRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
