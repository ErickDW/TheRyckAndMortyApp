import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarkModeService } from './services/rxjs/dark-mode/dark-mode.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/rxjs/search/search.service';
import { CharactersService } from './services/api/characters/characters.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    CoreModule,
    AppRoutingModule,
    DarkModeService,
    SearchService,
    CharactersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
