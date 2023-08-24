import { Component } from '@angular/core';
import { CHARACTER, EPISODE, LOCATIONRM } from 'src/app/utils/mocks';
import { Episode } from '../../../utils/interfaces/rick-and-morty/episode.interface';
import { LocationRM } from '../../../utils/interfaces/rick-and-morty/location-rm.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  episode : Episode = EPISODE;
  locationRM : LocationRM = LOCATIONRM;
}
