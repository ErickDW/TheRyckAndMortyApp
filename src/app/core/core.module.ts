import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './core/material/material.module';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme.switcher.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { CharacterContendCardComponent } from './components/card/components/character-contend-card/character-contend-card.component';
import { EpisodeContendCardComponent } from './components/card/components/episode-contend-card/episode-contend-card.component';
import { LocationContendCardComponent } from './components/card/components/location-contend-card/location-contend-card.component';

@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    NavbarComponent,
    CardComponent,
    CharacterContendCardComponent,
    EpisodeContendCardComponent,
    LocationContendCardComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FormsModule],
  exports: [
    MaterialModule,
    ThemeSwitcherComponent,
    NavbarComponent,
    CardComponent,
  ],
})
export class CoreModule {}
