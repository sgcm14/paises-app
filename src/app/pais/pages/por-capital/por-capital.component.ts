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
  // hayError: boolean = false;
  paises: Country[]=[];
  public isLoading: boolean = false;
  public initialValue: string ='';

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paises = this.paisService.cacheStore.byCapital.countries;
    this.initialValue= this.paisService.cacheStore.byCapital.term;
  }

  buscar( termino: string) {
    // this.hayError = false;
    this.termino = termino;
    this.isLoading=true;
    
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises= paises;
        this.isLoading = false;
      }, (err) => {
        // this.hayError = true;
        this.paises = [];
      });
  }


}
