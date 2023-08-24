import { Component, Input } from '@angular/core';
import { Character } from 'src/app/utils/interfaces';
import { CHARACTER } from 'src/app/utils/mocks';

@Component({
  selector: 'app-character-contend-card',
  templateUrl: './character-contend-card.component.html',
  styleUrls: ['./character-contend-card.component.scss']
})
export class CharacterContendCardComponent {
  @Input() data: Character = CHARACTER;

  statusToolTip():string{
    return (this.data.status === 'unknown') ?
      'Son of a b*tch, unknown' :
      `${this.data.name} is ${this.data.status.toLowerCase()}`
  }
}
