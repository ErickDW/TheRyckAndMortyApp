import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharactersService } from 'src/app/services/api/characters/characters.service';
import { LocationsRmService } from 'src/app/services/api/locations-rm/locations-rm.service';
import { Character, LocationRM, ResponseRM } from 'src/app/utils/interfaces';
import { LOCATIONRM } from 'src/app/utils/mocks';

@Component({
  selector: 'app-location-rm',
  templateUrl: './location-rm.component.html',
  styleUrls: ['./location-rm.component.scss'],
})
export class LocationRMComponent {
  id: number = 0;
  locationRM: LocationRM = LOCATIONRM;
  data: Character[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private locationsRMService: LocationsRmService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      scrollTo(0, 0);
      this.id = param['id'];
      this.getDataFromService();
    });
  }

  private getDataFromServiceLoadResidents() {
    this.characterService
      .getResidents(this.locationRM.residents)
      .pipe(take(1))
      .subscribe({
        next: (res: Character[] | Character | ResponseRM) => {
          const oneCharacter: Character = res as Character;
          const multipleCharacter: Character[] = res as Character[];
          const genericResult: ResponseRM = res as ResponseRM;
          if (!multipleCharacter.length) {
            if(!genericResult.info){
              this.data = [oneCharacter];
            }else{
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
    this.locationsRMService
      .getDetails(this.id)
      .pipe(take(1))
      .subscribe({
        next: (res: LocationRM) => {
          this.locationRM = res;
        },
        error: () => {
          this.locationRM = LOCATIONRM;
        },
        complete: () => {
          this.getDataFromServiceLoadResidents();
        },
      });
  }
}
