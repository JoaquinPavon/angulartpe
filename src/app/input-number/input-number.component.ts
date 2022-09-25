import { Component, OnInit } from '@angular/core';
import { GamersAboutComponent } from '../gamers-about/gamers-about.component';
import { Gamers } from '../gamers-tandil/gamers';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }
 gamers: Gamers ;
  ngOnInit(): void {
  }
//FUNCION DE TS, QUE AUMENTA LA CANTIDAD
MasCantidad(gamers: Gamers): void {
  if(gamers.Cantidad < gamers.Stock)
  gamers.Cantidad++;
  
  }
  
  MenosCantidad(gamers: Gamers): void {
  if (gamers.Cantidad >0)
    gamers.Cantidad--;
    
    }
    
}
