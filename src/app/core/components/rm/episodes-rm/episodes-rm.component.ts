import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { EspisodesService } from 'src/app/services/api/episodes/espisodes.service';
import { SearchService } from 'src/app/services/rxjs/search/search.service';
import { Episode, FilterCharacter, Info, ResponseRM } from 'src/app/utils/interfaces';
import { EPISODE } from 'src/app/utils/mocks';

@Component({
  selector: 'app-episodes-rm',
  templateUrl: './episodes-rm.component.html',
  styleUrls: ['./episodes-rm.component.scss']
})
export class EpisodesRmComponent {

  query: FilterCharacter = {
    name: '',
  };

  pageNum: number = 1;

  episodes: Episode[] = [];
  info: Info = {
    next: null,
  };

  constructor(
    private episodesService: EspisodesService,
    private search: SearchService
  ) {
    this.search.search$.subscribe((state) => {
      this.query.name = state.name;
      this.query.status = state.status;
      this.pageNum = 1;
      this.getDataFromService();
    });
  }

  private getDataFromService() {
    this.episodesService
      .searchEpisodes(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe({
        next: (res: ResponseRM) => {
          const { info, results } = res;
          const epis: Episode[] = results as Episode[];
          if (this.pageNum > 1) {
            this.episodes = [...this.episodes, ...epis];
          } else {
            this.episodes = [...epis];
          }
          this.info = info;
        },
        error: () => {
          this.episodes = [];
        },
      });
  }

  onScrollDown() {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFromService();
    }
  }
}
