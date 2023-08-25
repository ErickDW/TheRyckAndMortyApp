import { Component, Input} from '@angular/core';
import { DarkModeService } from 'src/app/services/rxjs/dark-mode/dark-mode.service';
import { Character, Episode, LocationRM } from 'src/app/utils/interfaces';
import { CHARACTER, EPISODE, LOCATIONRM } from 'src/app/utils/mocks';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: Character | Episode | LocationRM = CHARACTER;
  @Input() rout: string = '';

  imageSrc : string = CHARACTER.image;
  dark: boolean = false;

  constructor(private darkModeTheme: DarkModeService){
    this.darkModeTheme.darkMode$.subscribe(state => {
      this.dark = state;
    });
  }

  img():string{
    const data = this.data as Character;
    const img = data.image;
    return this.isCharacter() ? img : CHARACTER.image;
  }

  isCharacter():boolean{
    const data = this.data as Character;
    return data.status ? true : false;
  }

  isEpisode():boolean{
    const data = this.data as Episode;
    return data.air_date ? true : false;
  }

  isLocation():boolean{
    const data = this.data as LocationRM;
    return data.dimension ? true : false;
  }

  getCharacter():Character{
    return this.data as Character;
  }

  getEpisode():Episode{
    return this.data as Episode;
  }

  getLocation():LocationRM{
    return this.data as LocationRM;
  }
}
