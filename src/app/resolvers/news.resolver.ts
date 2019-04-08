import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { NewsService } from '../services/news.service';
import { catchError, delay } from "rxjs/operators";
import { of, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class NewsResolver implements Resolve<any> {

    constructor (private newsService: NewsService) {}

    resolve(): Observable<any> {
        return this.newsService.getNews().pipe(
            catchError(() => { return of("Data not available")})
        );
    }
}