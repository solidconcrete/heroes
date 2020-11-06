// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
// import { MessageService } from '../message.service';
// import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class HeroService {
//
//   private heroesUrl = 'api/heroes';  // URL to web api
//   httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
//
//   constructor(private http: HttpClient,
//               private messageService: MessageService) {
//   }
//
//
//   getHeroes(): Observable<Hero[]> {
//     // returns an observable <Hero[]> (observable of Hero arrays)
//     return this.http.get<Hero[]>(this.heroesUrl).pipe(
//
//       tap(_ => this.log('fetched heroes')),
//       // catch error and hand it over to handler
//       catchError(this.handleError<Hero[]>('getHeroes', []))
//     );
//   }
//
//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       // report error to console
//       console.error(error);
//       // send a message
//       this.log(`${operation} failed: ${error.message}`);
//       // return a safe value so the app may continiue working
//       return of(result as T);
//     };
//   }
//
//   getHero(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Hero>(`getHero id=${id}`))
//     );
//   }
//
//   /** Log a HeroService message with the MessageService */
//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
//
//   updateHero(hero: Hero): Observable<any> {
//     return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap(_ => this.log(`updated hero id= ${hero.id}`)),
//       catchError(this.handleError<any>('updateHero'))
//     );
//   }
//
//   addHero(hero: Hero): Observable<Hero> {
//     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
//       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
//       catchError(this.handleError<Hero>('addHero'))
//     );
//   }
//
//
//   deleteHero(hero: Hero | number): Observable<Hero> {
//     const id = typeof hero === 'number' ? hero : hero.id;
//     const url = `${this.heroesUrl}/${id}`;
//
//     return this.http.delete<Hero>(url, this.httpOptions).pipe(
//       tap(_ => this.log(`deleted hero id=${id}`)),
//       catchError(this.handleError<Hero>('deleteHero'))
//     );
//   }
//
//   searchHeroes(term: string): Observable<Hero[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
//       tap(x => x.length ?
//         this.log(`found heroes matching "${term}"`) :
//         this.log(`no heroes matching "${term}"`)),
//       catchError(this.handleError<Hero[]>('searchHeroes', []))
//     );
//   }
// }
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {MessageService} from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  }
}
