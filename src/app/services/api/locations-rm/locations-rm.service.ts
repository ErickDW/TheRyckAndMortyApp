import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterCharacter, LocationRM, ResponseRM } from 'src/app/utils/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsRmService {
  private urlApi: string = environment.baseUrlAPI;
  private locationRM: string = 'location';
  private urlComplete: string = this.urlApi + this.locationRM;

  private defaultFilter: FilterCharacter = {
    name: '',
  };

  constructor(private http: HttpClient) {}

  searchLocationsRM(
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
    return this.http.get<LocationRM>(filter);
  }
}
