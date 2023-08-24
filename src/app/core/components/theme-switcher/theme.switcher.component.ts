import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DarkModeService } from 'src/app/services/rxjs/dark-mode/dark-mode.service';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme.switcher.component.html',
  styleUrls: ['./theme.switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  isDarkThemeActive: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private darkMode: DarkModeService
  ) {
    this.customModeUser();
  }

  onChange(newValue: boolean): void {
    if (newValue) {
      this.document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
      this.isDarkThemeActive = true;
      this.darkMode.darkModeSet(true);
    } else {
      this.document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
      this.isDarkThemeActive = false;
      this.darkMode.darkModeSet(false);

    }
  }

  customModeUser() {
    const darkMode: boolean = localStorage.getItem('darkMode') === 'true';
    this.onChange(darkMode);
  }
}
