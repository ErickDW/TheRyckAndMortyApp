import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe( param => {
      console.log(param['id']);
    });
  }
}
