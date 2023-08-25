import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationRMComponent } from './location-rm/location-rm.component';
import { FiltersComponent } from './home/components/filters/filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent,
    EpisodeComponent,
    LocationRMComponent,
    FiltersComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, CoreModule, FormsModule],
  providers: [CoreModule],
})
export class FeaturesModule {}
