import { Component, OnInit } from '@angular/core';
import { of, Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

export interface Product {
  id: number,
  title: string,
  price: number
}

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  number$: Observable<number> = 
              interval(1000)
                .pipe(take(10));

  title: string = "Observables";

  dataFromNews: any;

  myObservable = of(1,2,3);

  selectedProduct: Product;
  products: Product[] = [
    {id: 1, title:"Jus de pomme", price: 5},
    {id: 2, title:"Chips", price: 3},
    {id:3, title:"Ecran", price: 300}
  ]

  onSelectProduct(prod: Product): void {
    if(prod===this.selectedProduct) {
      this.selectedProduct = null;
      this.router.navigate(['/testObservable']);
      return;
    }
    this.selectedProduct = prod;
    this.router.navigate(['/testObservable', {outlets: {'product': [prod.id]}}]);
  }
  
  products$: Observable<Product[]>;

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  myObserver = {
    next: x => console.log('next: ' + x),
    error: err => console.log('error: ' + err),
    complete: () => console.log('complete')
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.dataFromNews = data);
    this.myObservable.subscribe(this.myObserver);
    this.products$ = this.getProducts();
  }

}
