import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  status: string = 'Alive';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param['id']);
    });
  }
}
