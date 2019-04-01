import { Injectable } from '@angular/core';

// SERVICES
import { MessageService } from "../services/message.service";

// DATA
import { Hero } from '../models/hero';

// RXJS
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost:3000/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log("Hero service: List of heroes fetched")),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`Hero service: fetched info of hero id ${id}`)),
        catchError(this.handleError<Hero>('getHeroes'))
      );
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`Hero ${hero.id} has been updated`)),
        catchError(this.handleError<Hero>('updateHero'))
      )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Hero ${newHero.name} created with an ID of ${newHero.id}`)),
      catchError(this.handleError<Hero>('createHero'))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;

    return this.http.delete(`${this.heroesUrl}/${id}`, httpOptions).pipe(
      tap((deletedHero: Hero) => this.log(`Hero with the ID of ${deletedHero.id} deleted`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`, httpOptions).pipe(
      tap(_ => this.log(`Found heroes matching the term ${term}`)),
      catchError(this.handleError<Hero[]>('searchHeroes'))
    )
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`Log: ${message}`);
  }

  private handleError<T>(operation:string = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

}
