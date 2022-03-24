import { Component, OnInit } from '@angular/core';

import { Country } from 'src/app/pais/interfaces/pais.interface';
import { PaisService } from 'src/app/pais/services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean=false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.mostrarSugerencias=false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,5),
      (err)=> this.paisesSugeridos=[]
      );
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
    
  }

}
