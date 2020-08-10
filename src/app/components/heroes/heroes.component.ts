import { MesService } from './../../services/mes.service';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from "../../interface/hero";
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  
  
  constructor(private heroService: HeroService, private mesService: MesService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.heroes);
    
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
