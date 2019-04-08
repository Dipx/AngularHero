import { Component, OnInit, Input } from '@angular/core';

export interface News {
  id: number;
  title: string;
  user: string;
  time_ago: string;
  url: string;
  domain: string;
}

@Component({
  selector: 'show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.scss']
})
export class ShowNewsComponent implements OnInit {

  @Input()
  inputNews: any;

  news: News[];

  constructor() { }

  ngOnInit() {
    this.news = Object.values(this.inputNews);
  }

}
