import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamersAboutComponent } from './gamers-about/gamers-about.component';
import { GamersProductosComponent } from './gamers-productos/gamers-productos.component';

const routes: Routes = [

{ path: '', redirectTo: 'gamers', pathMatch: 'full',},
{ path: 'gamers', component:GamersProductosComponent},
{ path: 'about', component: GamersAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
