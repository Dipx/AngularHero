import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: {id: string}) => {
          this.productId = params.id;
        }
      );
  }

}
