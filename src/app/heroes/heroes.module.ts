import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent} from './hero-list/hero-list.component';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



@NgModule({
  declarations: [HeroDetailComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
