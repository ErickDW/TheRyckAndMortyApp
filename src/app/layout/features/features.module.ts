import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsRMComponent } from './locations-rm/locations-rm.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
    EpisodesComponent,
    LocationsRMComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule
  ],
  providers:[CoreModule]
})
export class FeaturesModule { }
