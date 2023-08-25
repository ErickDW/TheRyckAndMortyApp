import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';
import {
  Character,
  FilterCharacter,
  ResponseRM,
} from 'src/app/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private urlApi: string = environment.baseUrlAPI;
  private character: string = 'character';
  private urlComplete: string = this.urlApi + this.character;

  private defaultFilter: FilterCharacter = {
    name: '',
  };

  constructor(private http: HttpClient) {}

  searchCharacters(
    query: FilterCharacter = this.defaultFilter,
    page: number = 1
  ) {
    let fil = `?page=${page}&name=${query.name}`;
    if (query.status && query.status !== 'All') {
      fil += `&status=${query.status}`;
    }
    const filter: string = `${this.urlComplete}/${fil}`;
    return this.http.get<ResponseRM>(filter);
  }

  getDetails(id: number) {
    const filter: string = `${this.urlComplete}/${id}`;
    return this.http.get<Character>(filter);
  }

  getResidents(urls: string[]) {
    const regex = /\/(\d+)$/;

    const residents = urls.map((url) => {
      const match = url.match(regex);
      return match ? match[1] : null;
    });

    const commaSeparatedString = residents.join(',');

    const filter: string = `${this.urlComplete}/${commaSeparatedString}`;
    return this.http.get<Character[] | Character>(filter);
  }
}
