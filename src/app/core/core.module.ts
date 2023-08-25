import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './core/material/material.module';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme.switcher.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterContendCardComponent } from './components/card/components/character-contend-card/character-contend-card.component';
import { EpisodeContendCardComponent } from './components/card/components/episode-contend-card/episode-contend-card.component';
import { LocationContendCardComponent } from './components/card/components/location-contend-card/location-contend-card.component';
import { SearchComponent } from './components/search/search.component';
import { SelectComponent } from './components/select/select.component';
import { ButtonUpComponent } from './components/button-up/button-up.component';
import { ButtonBackComponent } from './components/button-back/button-back.component';
import { StatusCircleComponent } from './components/status-circle/status-circle.component';
import { CharactersRmComponent } from './components/rm/characters-rm/characters-rm.component';
import { EpisodesRmComponent } from './components/rm/episodes-rm/episodes-rm.component';
import { LocationsRmComponent } from './components/rm/locations-rm/locations-rm.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    NavbarComponent,
    CardComponent,
    CharacterContendCardComponent,
    EpisodeContendCardComponent,
    LocationContendCardComponent,
    SearchComponent,
    SelectComponent,
    ButtonUpComponent,
    ButtonBackComponent,
    StatusCircleComponent,
    CharactersRmComponent,
    EpisodesRmComponent,
    LocationsRmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  exports: [
    MaterialModule,
    ThemeSwitcherComponent,
    NavbarComponent,
    CardComponent,
    SearchComponent,
    SelectComponent,
    ButtonBackComponent,
    StatusCircleComponent,
    ButtonUpComponent,
    CharactersRmComponent,
    EpisodesRmComponent,
    LocationsRmComponent
  ],
})
export class CoreModule {}
