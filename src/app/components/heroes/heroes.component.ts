import { Component, OnInit } from '@angular/core';
import {HEROES} from "../../heroData";
import {Hero} from "../../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;
  
  goDetails(hero: Hero):void {
    this.selectedHero = hero
  }
  constructor() { }

  ngOnInit(): void {
  }

}
