import { Hero } from './../interface/hero';
import { HEROES } from '../heroData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MesService} from "./mes.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private heroesUrl = 'api/heroes'
  private userUrl = 'http://reqres.in/api'
  constructor(private mesService: MesService, private http: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url)
  }

  updateHero(hero: Hero) {
    return this.http.put(this.heroesUrl, hero)
  }

  addHero(hero: Hero) {
    return this.http.post<Hero>(this.heroesUrl, hero)
  }

  deleteHero(hero: Hero | number) {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete<Hero>(url)
  }

  getUsers(pageNumber: number) {
    const url = `${this.userUrl}/users?page=${pageNumber}`
    return this.http.get(url)
  }

  getUser(id: number) {
    const url = `${this.userUrl}/users/${id}`
    return this.http.get(url)
  }

  searchHeros(text: string): Observable<Hero[]> {
    const url = `${this.userUrl}/?name=${text}`
    if (!text.trim()) {
      return of([])
    }
    return this.http.get<Hero[]>(url).pipe(
      tap(x => x.length ? this.log(`matching ${text}`) : this.log( `no matching ${text}`))
    )
  }

  private log(mes: string) {
    this.mesService.addMess(`add: ${mes}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {

      console.log(err);

      this.log(`${operation} failed: ${err.message}`);

      return of(result as T);
    }
  }
}
