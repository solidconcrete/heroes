import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent} from './hero-list/hero-list.component';


import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [HeroDetailComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
