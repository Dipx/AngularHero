import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  title: string = "Observables";
  myObservable = of(1,2,3);

  myObserver = {
    next: x => console.log('next: ' + x),
    error: err => console.log('error: ' + err),
    complete: () => console.log('complete')
  };

  constructor() { }

  ngOnInit() {
    this.myObservable.subscribe(this.myObserver);
  }

}
