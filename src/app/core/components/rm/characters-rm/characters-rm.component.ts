import { Component, Input } from '@angular/core';
import { take } from 'rxjs/operators';

import { CharactersService } from 'src/app/services/api/characters/characters.service';
import { Character, FilterCharacter } from 'src/app/utils/interfaces';
import { ResponseRM, Info } from '../../../../utils/interfaces';
import { SearchService } from 'src/app/services/rxjs/search/search.service';

@Component({
  selector: 'app-characters-rm',
  templateUrl: './characters-rm.component.html',
  styleUrls: ['./characters-rm.component.scss'],
})
export class CharactersRmComponent {
  query: FilterCharacter = {
    name: '',
  };
  pageNum?: number;

  characters: Character[] = [];
  info: Info = {
    next: null,
  };

  constructor(
    private characterService: CharactersService,
    private search: SearchService
  ) {
    this.search.search$.subscribe((state) => {
      this.query.name = state;
      this.getDataFromService();
    });
  }

  private getDataFromService() {
    this.characterService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe({
        next: (res: ResponseRM) => {
          const { info, results } = res as ResponseRM;
          const char: Character[] = results as Character[];
          this.characters = [...char];
          this.info = info;
        },
        error: () => {
          this.characters = [];
        },
      });
  }
}
