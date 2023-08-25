import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Character, FilterCharacter, ResponseRM } from 'src/app/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private urlApi: string = environment.baseUrlCharactersAPI;
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
    if (query.status) {
      fil += `?status=${query.status}`;
    }
    const filter: string = `${this.urlComplete}/${fil}`;
    return this.http.get<ResponseRM>(filter);
  }

  getDetails(id: number) {
    const filter: string = this.urlComplete + id;
    return this.http.get<Character>(filter);
  }
}
