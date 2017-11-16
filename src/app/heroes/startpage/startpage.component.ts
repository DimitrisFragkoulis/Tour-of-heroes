import { Hero } from './../hero/hero';
import { HeroService } from './../shared/hero.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './startpage.component.html',
  styleUrls: [ './startpage.component.css' ]
})
export class StartpageComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
