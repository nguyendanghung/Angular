import { HeroService } from './../../services/api.service';
import { Hero } from './../../interface/hero';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heros$: Observable<Hero[]>;

  searchTerm = new Subject<string>();

  constructor(private apiSerive: HeroService) { }

  ngOnInit(): void {
    this.heros$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.apiSerive.searchHeros(term))
    )
  }

  search(term: string):void {
    this.searchTerm.next(term);
  }

}
