import { Injectable } from '@angular/core';
import { Link } from '../models/link';
import { MessageService } from "../services/message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private linksUrl = 'http://localhost:3000/links';

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.linksUrl)
      .pipe(
        tap(_ => this.log(`GET: ${this.linksUrl} | Links service: List of links fetched`)),
        catchError(this.handleError<Link[]>('getLinks'))
      )
  }

  getLink(id: number): Observable<Link> {
    return this.http.get<Link>(`${this.linksUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`GET: ${this.linksUrl}/${id} | Got the link with the id of ${id}`)),
        catchError(this.handleError<Link>('getLink'))
      )
  }

  addLink(link: Link): Observable<Link> {
    return this.http.post(this.linksUrl, link, httpOptions).pipe(
      tap((newLink: Link) => this.log(`POST: ${this.linksUrl} | Successfuly added a new link with an id of ${newLink.id}`)),
      catchError(this.handleError<Link>('createLink'))
    )
  }

  updateLink(link: Link): Observable<Link> {
    return this.http.put<Link>(this.linksUrl, link, httpOptions).pipe(
      tap(_ => this.log(`PUT: ${this.linksUrl} | Successfuly updated a link with an id of ${link.id}`)),
      catchError(this.handleError<Link>('updateLink'))
    )
  }

  deleteLink(link: Link | number): Observable<Link> {
    const id = typeof link === 'number' ? link: link.id;

    return this.http.delete(`${this.linksUrl}/${id}`, httpOptions).pipe(
      tap((deletedLink: Link) => this.log(`DELETE: ${this.linksUrl}/${id} | Successfuly deleted a link with an id of ${deletedLink.id}`)),
      catchError(this.handleError<Link>('deleteLink'))
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
