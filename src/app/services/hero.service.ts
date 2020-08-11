import { Hero } from './../interface/hero';
import { HEROES } from './../heroData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MesService} from "./mes.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'

  constructor(private mesService: MesService, private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError()
      )
  }

  getHero(id: number): Observable<Hero> {
    this.mesService.addMess(`Fetch hero ${id}`);
    return this.http.get<Hero>(this.heroesUrl)
  }

  private log(mes: string) {
    this.mesService.addMess(`add: ${mes}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    
  }
}
