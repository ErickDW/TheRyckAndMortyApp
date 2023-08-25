import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/api/characters/characters.service';
import { Character, Episode } from 'src/app/utils/interfaces';
import { EPISODE } from 'src/app/utils/mocks';

@Component({
  selector: 'app-episode-contend-card',
  templateUrl: './episode-contend-card.component.html',
  styleUrls: ['./episode-contend-card.component.scss']
})
export class EpisodeContendCardComponent {
  @Input() data: Episode = EPISODE;

  commaSeparatedString = 'Rick';
  namesResidents: string[] = [];

  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    this.getDataFromServiceLoadResidents();
  }

  private getDataFromServiceLoadResidents() {
    this.characterService
      .getResidents(this.data.characters)
      .pipe(take(1))
      .subscribe({
        next: (res: Character[] | Character) => {
          const oneCharacter: Character = res as Character;
          const multipleCharacter: Character[] = res as Character[];

          if (!multipleCharacter.length) {
            if (oneCharacter.name) {
              this.namesResidents = [oneCharacter.name];
            } else {
              this.namesResidents = [];
            }
          } else {
            const names = multipleCharacter.map((character) => character.name);
            this.namesResidents = names;
          }
        },
        complete: () => {
          this.set();
        },
      });
  }

  set() {
    if (this.namesResidents.length <= 0) {
      this.commaSeparatedString = 'None';
    } else {
      this.commaSeparatedString = this.namesResidents.join(', ');
    }
  }
}
