import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsRMComponent } from './locations-rm.component';

describe('LocationsRMComponent', () => {
  let component: LocationsRMComponent;
  let fixture: ComponentFixture<LocationsRMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsRMComponent]
    });
    fixture = TestBed.createComponent(LocationsRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
