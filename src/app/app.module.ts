import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonImageComponent } from './components/pokemon-image/pokemon-image.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StickComponent } from './components/buttons/stick/stick.component';
import { BttnsComponent } from './components/buttons/bttns/bttns.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonImageComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    StickComponent,
    BttnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
