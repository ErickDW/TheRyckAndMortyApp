import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/rxjs/dark-mode/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  dark: boolean = false;

  constructor(private darkModeTheme: DarkModeService){
    this.darkModeTheme.darkMode$.subscribe(state => {
      this.dark = state;
      console.log('nav: ', this.dark );
    });
  }


}
