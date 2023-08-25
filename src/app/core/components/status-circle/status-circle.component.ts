import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-circle',
  templateUrl: './status-circle.component.html',
  styleUrls: ['./status-circle.component.scss']
})
export class StatusCircleComponent {
  @Input() status: string = 'alive';
  @Input() name: string = 'Morty';

  statusToolTip():string{
    return (this.status === 'unknown') ?
      'Son of a b*tch, unknown' :
      `${this.name} is ${this.status.toLowerCase()}`
  }
}
