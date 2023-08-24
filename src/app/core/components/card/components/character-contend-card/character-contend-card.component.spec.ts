import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterContendCardComponent } from './character-contend-card.component';

describe('CharacterContendCardComponent', () => {
  let component: CharacterContendCardComponent;
  let fixture: ComponentFixture<CharacterContendCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterContendCardComponent]
    });
    fixture = TestBed.createComponent(CharacterContendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
