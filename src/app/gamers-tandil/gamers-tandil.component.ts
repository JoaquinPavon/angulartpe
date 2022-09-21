import { Component, OnInit } from '@angular/core';
import { Gamers } from './gamers';
@Component({
  selector: 'app-gamers-tandil',
  templateUrl: './gamers-tandil.component.html',
  styleUrls: ['./gamers-tandil.component.scss']
})


export class GamersTandilComponent implements OnInit {



gamers: Gamers [] =  [{  
"Nombre": "Teclado Mecanico",
"Marca": "Logitech",
"Precio": 12000,
"Stock": 5,
"Image": "assets/images/auricularlogitech.jpg",
"Oferta": false },

{ 
"Nombre": "Mouse Inalambrico",
"Marca": "Razer",
"Precio": 6500,
"Stock": 12,
"Image": "assets/images/mouserazer.jpg",
"Oferta": true  },

{
"Nombre": "Auricular",
"Marca": "SteelSeries",
"Precio": 18000,
"Stock": 19,
"Image": "assets/images/auricularss.jpg",
"Oferta": false  },

{
"Nombre": "Auricular",
"Marca": "Razer",
"Precio": 28000,
"Stock": 9,
"Image": "assets/images/auricularrazer.jpg",
"Oferta": false },
{

"Nombre": "Auricular",
"Marca": "Logitech",
"Precio": 30000,
"Stock": 3,
"Image": "assets/images/auricularlogitech.jpg",
"Oferta": false },

 {
"Nombre": "Teclado",
"Marca": "Razer",
"Precio": 38000,
"Stock": 11,
"Image": "assets/images/tecladorazer.jpg",
"Oferta": true 

},

{
"Nombre": "Mouse",
"Marca": "SteelSeries",
"Precio": 10000,
"Stock": 42,
"Image": "assets/images/mousess.jpg",
"Oferta": false 

},

{
"Nombre": "Mouse",
"Marca": "Genius Pro Gamer",
"Precio": 3000,
"Stock": 1,
"Image": "assets/images/mousegenius.jpg",
"Oferta": false 

}

];



  constructor() {}

  ngOnInit(): void {
  }

}
