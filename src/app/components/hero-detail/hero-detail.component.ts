import { ApiService } from '../../services/api.service';
import { Hero } from '../../interface/hero';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private route:ActivatedRoute, private apiService: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
    console.log(this.hero);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.apiService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

  updateUser(): void {
    this.apiService.updateHero(this.hero).subscribe(() => this.goBack())
  }

}
