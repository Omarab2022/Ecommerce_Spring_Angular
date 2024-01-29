import { Component, Input } from '@angular/core';
import { productdata } from 'src/productsData';

@Component({
  selector: 'app-product-review-card',
  templateUrl: './product-review-card.component.html',
  styleUrls: ['./product-review-card.component.scss']
})
export class ProductReviewCardComponent {
  rating: number=4;

  @Input() review:any;

  constructor(){

  }
 

}
