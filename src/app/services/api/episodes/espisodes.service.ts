import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterCharacter, ResponseRM, Episode } from 'src/app/utils/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspisodesService {
  private urlApi: string = environment.baseUrlAPI;
  private episode: string = 'episode';
  private urlComplete: string = this.urlApi + this.episode;

  private defaultFilter: FilterCharacter = {
    name: '',
  };

  constructor(private http: HttpClient) {}

  searchEpisodes(
    query: FilterCharacter = this.defaultFilter,
    page: number = 1
  ) {
    let fil = `?page=${page}&name=${query.name}`;
    // if (query.status && query.status !== 'All') {
    //   fil += `&status=${query.status}`;
    // }
    const filter: string = `${this.urlComplete}/${fil}`;
    return this.http.get<ResponseRM>(filter);
  }

  getDetails(id: number) {
    const filter: string = `${this.urlComplete}/${id}`;
    return this.http.get<Episode>(filter);
  }
}
