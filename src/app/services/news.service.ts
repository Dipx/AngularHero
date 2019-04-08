import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { take, tap, map, delay } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class NewsService {

    constructor (private http: HttpClient) {}

    getNews() {
        const endpoint: string = "https://api.hnpwa.com/v0/news.json";
        return this.http.get<Array<any>>(endpoint).pipe(
            map(x => x.slice(0, 9)),
            tap(_ => console.log("data from resolver: ", _))
        );
    }

    getNew(id: string) {
        const endpoint: string = "https://hacker-news.firebaseio.com/v0/item/"

        return this.http.get(`${endpoint}${id}.json`);
    }
}