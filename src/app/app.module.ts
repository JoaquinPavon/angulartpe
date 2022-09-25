import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamersTandilComponent } from './gamers-tandil/gamers-tandil.component';
import { FormsModule } from '@angular/forms';
import { GamersAboutComponent } from './gamers-about/gamers-about.component';
import { GamersProductosComponent } from './gamers-productos/gamers-productos.component';
import { CarritogamersComponent } from './carritogamers/carritogamers.component';
import { InputNumberComponent } from './input-number/input-number.component';
@NgModule({
  declarations: [
    AppComponent,
    GamersTandilComponent,
    GamersAboutComponent,
    GamersProductosComponent,
    CarritogamersComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
