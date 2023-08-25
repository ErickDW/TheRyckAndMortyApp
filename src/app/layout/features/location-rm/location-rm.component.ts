import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-rm',
  templateUrl: './location-rm.component.html',
  styleUrls: ['./location-rm.component.scss']
})
export class LocationRMComponent {
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe( param => {
      console.log(param['id']);
    });
  }
}
