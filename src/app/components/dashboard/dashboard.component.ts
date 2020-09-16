import { Hero } from '../../interface/hero';
import { HeroService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log('====================================');
    console.log(this.heroes);
    console.log('====================================');
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
    console.log(this.heroes);
  }

}
