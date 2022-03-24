import { Component, OnInit } from '@angular/core';

import { Country } from 'src/app/pais/interfaces/pais.interface';
import { PaisService } from 'src/app/pais/services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[]=[];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises= paises;
      
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }


}
