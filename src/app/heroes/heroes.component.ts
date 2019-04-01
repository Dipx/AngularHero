import { Component, OnInit } from '@angular/core';
import { HeroService } from "../services/hero.service";

import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe((data: Hero[]) => this.heroes = data);
  }

  add(name: string):void {
    name = name.trim();
    if(!name) return;

    this.heroService.addHero({name} as Hero)
      .subscribe((data: Hero) => {
        this.heroes.push(data);
      });
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter(h => h != hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  ngOnInit() {
    this.getHeroes();
  }

}
