import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/api/characters/characters.service';
import { SearchService } from 'src/app/services/rxjs/search/search.service';
import { Character } from 'src/app/utils/interfaces';
import { CHARACTER } from 'src/app/utils/mocks';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  firstName: string = 'Morty';
  id: number = 0;
  character: Character = CHARACTER;
  constructor(
    private activatedRoute: ActivatedRoute,
    private search: SearchService,
    private characterService: CharactersService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      scrollTo(0, 0);
      this.id = param['id'];
      this.getDataFromService();
    });
  }

  ngOnDestroy(): void {
    this.search.searchSet({ name: '' });
  }

  private getDataFromService() {
    this.characterService
      .getDetails(this.id)
      .pipe(take(1))
      .subscribe({
        next: (res: Character) => {
          this.character = res;
        },
        error: () => {
          this.character = CHARACTER;
        },
        complete: () => {
          this.firstName = this.character.name.split(' ')[0];
          this.search.searchSet({ name: this.firstName });
        },
      });
  }

  statusToolTip(): string {
    return this.character.status === 'unknown'
      ? 'Son of a b*tch, unknown'
      : `${this.character.name} is ${this.character.status.toLowerCase()}`;
  }
}
