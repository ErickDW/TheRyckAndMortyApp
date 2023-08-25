import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsRmComponent } from './locations-rm.component';

describe('LocationsRmComponent', () => {
  let component: LocationsRmComponent;
  let fixture: ComponentFixture<LocationsRmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsRmComponent]
    });
    fixture = TestBed.createComponent(LocationsRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
