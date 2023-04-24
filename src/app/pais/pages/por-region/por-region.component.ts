import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from 'src/app/pais/interfaces/pais.interface';
import { Region } from 'src/app/pais/interfaces/region.type';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paises = this.paisService.cacheStore.byRegion.countries;
    this.regionActiva = this.paisService.cacheStore.byRegion.region;
    // this.activarRegion(this.paisService.cacheStore.byRegion.region);
  }

  activarRegion(region: Region) {

    if (region === this.regionActiva) { return; }

    this.regionActiva = region;

    this.paises = [];

    this.paisService.buscarRegion(region)
      .subscribe((paises) => {
        this.paises = paises;

      }, (err) => {
        this.paises = [];
      });
  }

  getClaseCSS(region: Region) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
