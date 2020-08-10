import { HEROES } from './../heroData';
import { Hero } from '../interface/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MesService} from "./mes.service"
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private mesService: MesService) { }


  getHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }

  getHero(id: number): Observable<Hero> {
    this.mesService.addMess(`Fetch hero ${id}`);
    return of(HEROES.find(hero => hero.id == id)) 
  }
}
