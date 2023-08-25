import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersRmComponent } from './characters-rm.component';

describe('CharactersRmComponent', () => {
  let component: CharactersRmComponent;
  let fixture: ComponentFixture<CharactersRmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersRmComponent]
    });
    fixture = TestBed.createComponent(CharactersRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
