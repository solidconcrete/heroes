import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero: Hero;
  hero$: Observable<Hero>;
  // inject services, save them in private fields
  constructor(
    // holds information about the HeroDetailComponent
    private route: ActivatedRoute,
    // gets hero data
    private service: HeroService,
    // private location: Location
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getHero();
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')))
    );
  }

  getHero(): void{
    // + converts string to number
    // route.snapshot is a static image of the route information
    // paramMap is a dictionary of parameter values extracted from URL
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void {
    // this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

}
