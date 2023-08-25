import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() preLoadData: Character[] = [];
  @Input() notPreLoadData: boolean = true;

  notPreloadData: boolean = true;

  query: FilterCharacter = {
    name: '',
  };
  pageNum: number = 1;

  characters: Character[] = [];
  info: Info = {
    next: null,
  };

  constructor(
    private characterService: CharactersService,
    private search: SearchService
  ) {
    this.search.search$.subscribe((state) => {
      this.query.name = state.name;
      this.query.status = state.status;
      this.pageNum = 1;
      this.getDataFromService();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['preLoadData']) {
      this.characters = changes['preLoadData'].currentValue;
    }
  }

  ngOnDestroy(): void {
    this.preLoadData = [];
    this.notPreLoadData = true;
  }

  private getDataFromService() {
    this.characterService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe({
        next: (res: ResponseRM) => {
          const { info, results } = res as ResponseRM;
          const char: Character[] = results as Character[];
          if (this.pageNum > 1) {
            this.characters = [...this.characters, ...char];
          } else {
            this.characters = [...char];
          }
          this.info = info;
        },
        error: () => {
          this.characters = [];
        },
      });
  }

  onScrollDown() {
    if (this.info.next && this.notPreLoadData) {
      this.pageNum++;
      this.getDataFromService();
    }
  }
}
