import { User } from './../interface/user';
import { Hero } from './../interface/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MesService} from "./mes.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private heroesUrl = 'api/heroes'
  private Url = 'https://5f68184c38ce870016398abf.mockapi.io'
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

  getUsers() {
    const url = `${this.Url}/users`
    return this.http.get(url)
  }

  getUser(id: number) {
    const url = `${this.Url}/users/${id}`
    return this.http.get(url)
  }

  addUser(user: User) {
    const url = `${this.Url}/users/`
    return this.http.post(url, user)
  }

  deleteUser(id: number) {
    const url = `${this.Url}/users/${id}`
    return this.http.delete(url)
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
