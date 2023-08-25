import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { LocationsRmService } from 'src/app/services/api/locations-rm/locations-rm.service';
import { SearchService } from 'src/app/services/rxjs/search/search.service';
import {
  FilterCharacter,
  Info,
  LocationRM,
  ResponseRM,
} from 'src/app/utils/interfaces';

@Component({
  selector: 'app-locations-rm',
  templateUrl: './locations-rm.component.html',
  styleUrls: ['./locations-rm.component.scss'],
})
export class LocationsRmComponent {
  query: FilterCharacter = {
    name: '',
  };

  pageNum: number = 1;

  locationsRM: LocationRM[] = [];
  info: Info = {
    next: null,
  };

  constructor(
    private locationsRMService: LocationsRmService,
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
    this.locationsRMService
      .searchLocationsRM(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe({
        next: (res: ResponseRM) => {
          const { info, results } = res;
          const locat: LocationRM[] = results as LocationRM[];
          if (this.pageNum > 1) {
            this.locationsRM = [...this.locationsRM, ...locat];
          } else {
            this.locationsRM = [...locat];
          }
          this.info = info;
        },
        error: () => {
          this.locationsRM = [];
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
