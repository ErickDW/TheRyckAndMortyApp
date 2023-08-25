import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/api/characters/characters.service';
import { EspisodesService } from 'src/app/services/api/episodes/espisodes.service';
import { Character, Episode, ResponseRM } from 'src/app/utils/interfaces';
import { EPISODE } from 'src/app/utils/mocks';

@Component({
  selector: 'app-episodes',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent {
  id: number = 0;
  episode: Episode = EPISODE;
  data: Character[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private espisodesService: EspisodesService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      scrollTo(0, 0);
      this.id = param['id'];
      this.getDataFromService();
    });
  }

  private getDataFromServiceLoadResidents() {
    this.characterService
      .getResidents(this.episode.characters)
      .pipe(take(1))
      .subscribe({
        next: (res: Character[] | Character | ResponseRM) => {
          const oneCharacter: Character = res as Character;
          const multipleCharacter: Character[] = res as Character[];
          const genericResult: ResponseRM = res as ResponseRM;
          if (!multipleCharacter.length) {
            if (!genericResult.info) {
              this.data = [oneCharacter];
            } else {
              this.data = [];
            }
          } else {
            this.data = multipleCharacter;
          }
        },
        complete: () => {
          this.set();
        },
      });
  }

  set() {}

  private getDataFromService() {
    this.espisodesService
      .getDetails(this.id)
      .pipe(take(1))
      .subscribe({
        next: (res: Episode) => {
          this.episode = res;
        },
        error: () => {
          this.episode = EPISODE;
        },
        complete: () => {
          this.getDataFromServiceLoadResidents();
        },
      });
  }
}
