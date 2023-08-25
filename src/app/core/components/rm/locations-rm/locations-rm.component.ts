import { Component } from '@angular/core';
import { LocationRM } from 'src/app/utils/interfaces';
import { LOCATIONRM } from 'src/app/utils/mocks';

@Component({
  selector: 'app-locations-rm',
  templateUrl: './locations-rm.component.html',
  styleUrls: ['./locations-rm.component.scss'],
})
export class LocationsRmComponent {
  locationRM: LocationRM = LOCATIONRM;
}
