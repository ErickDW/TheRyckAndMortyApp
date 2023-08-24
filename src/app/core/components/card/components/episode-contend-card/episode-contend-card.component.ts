import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/utils/interfaces';
import { EPISODE } from 'src/app/utils/mocks';

@Component({
  selector: 'app-episode-contend-card',
  templateUrl: './episode-contend-card.component.html',
  styleUrls: ['./episode-contend-card.component.scss']
})
export class EpisodeContendCardComponent {
  @Input() data: Episode = EPISODE;

  numbersCharacters: number = this.data.characters.length;
}
