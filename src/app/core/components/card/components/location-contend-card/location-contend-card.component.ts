import { Component, Input } from '@angular/core';
import { LocationRM } from 'src/app/utils/interfaces';
import { LOCATIONRM } from 'src/app/utils/mocks';

@Component({
  selector: 'app-location-contend-card',
  templateUrl: './location-contend-card.component.html',
  styleUrls: ['./location-contend-card.component.scss']
})
export class LocationContendCardComponent {
  @Input() data: LocationRM = LOCATIONRM;
  numberResidents: number = this.data.residents.length;
}
