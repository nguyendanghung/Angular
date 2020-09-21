import { Hero } from './../../interface/hero';
import { MesService } from './../../services/mes.service';
import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  
  
  constructor(private apiService: ApiService, private mesService: MesService) { }

  ngOnInit(): void {
    this.getHeroes();
    
  }

  getHeroes(): void {
    this.apiService.getHeroes().subscribe(heroes => this.heroes = heroes)
    console.log(this.heroes);

  }

  addHero(name: string):void {
    if (!name) {
      return;
    }
    name = name.trim()
    this.apiService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero))
  }

  deleteHero(hero: any): void {
    this.heroes = this.heroes.filter(h => h !== hero)
    this.apiService.deleteHero(hero).subscribe((res: any) => {
      if (res == true) {
        
      }
    })
  }

}
