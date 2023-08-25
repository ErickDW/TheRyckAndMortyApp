import { Component } from '@angular/core';
import { Episode } from 'src/app/utils/interfaces';
import { EPISODE } from 'src/app/utils/mocks';

@Component({
  selector: 'app-episodes-rm',
  templateUrl: './episodes-rm.component.html',
  styleUrls: ['./episodes-rm.component.scss']
})
export class EpisodesRmComponent {
  episode : Episode = EPISODE;
}
