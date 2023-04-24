import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from 'src/app/pais/interfaces/pais.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
   }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if (!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        // delay(2000),
      )
  }

  buscarPais(termino: string): Observable<Country[]> {
    //const url = `${this.apiUrl}/name/${termino}?fields=name,capital,alpha2code,flag,population `;
    const url = `${this.apiUrl}/name/${termino}`;
    // return this.http.get<Country[]>(url, { params: this.httpParams })
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCountries = {term: termino, countries}),
      tap( ()=> this.saveToLocalStorage())
    );
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    // return this.http.get<Country[]>(url, { params: this.httpParams })
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byCapital = {term: termino, countries}),
      tap( ()=> this.saveToLocalStorage())
    );
  }

  getPaisPorAlpha(id: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  buscarRegion(region: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    // return this.http.get<Country[]>(url, { params: this.httpParams })
    return this.getCountriesRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion={region,countries}),
      tap( ()=> this.saveToLocalStorage())
    );
  }
}
