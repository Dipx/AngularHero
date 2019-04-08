import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, catchError, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EmptyObservable } from "rxjs/observable/EmptyObservable";
import { MessageService } from 'src/app/services/message.service';

/*
WORKING BUT HEY, CORS DOES NOT ALLOW ME TO GET DATA, SAD ME
*/

@Component({
  selector: 'crypto-observable',
  templateUrl: './crypto-observable.component.html',
  styleUrls: ['./crypto-observable.component.scss']
})
export class CryptoObservableComponent implements OnInit {
  private baseCMCUrl: string = "https://pro-api.coinmarketcap.com";
  private apiCMC: string = "6ac86cdd-b308-4655-9d03-cc6c0656487b";
  cryptoInfos: string;
  private httpOptions = {
    
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })
  };

  searchInput = new FormControl({value: '', disabled: true});

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(crypto => this.getCryptoValue(crypto))
      )
      .subscribe(
        res => {
          console.log(res);
          this.cryptoInfos = res;
        },
        err => console.log("Can't get crypto infos")
      )
  }
  getCryptoValue(symbol: string): Observable<any> {
    console.log("try to get");
    return this.http.get(`${this.baseCMCUrl}/v1/cryptocurrency/quotes/latest?symbol=${symbol.toUpperCase()}&CMC_PRO_API_KEY=${this.apiCMC}`, this.httpOptions)
      .pipe(catchError(err => {
        if (err.status === 404) {
          this.messageService.add(`Symbol ${symbol} not found`);
          return new EmptyObservable<Response>();
        }
      }))
  }

}
