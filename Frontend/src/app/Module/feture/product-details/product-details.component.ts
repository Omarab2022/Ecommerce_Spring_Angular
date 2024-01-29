import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import {
  findProductByIdRequest,
  updateProductRequest,
} from 'src/app/state/Product/Actions';
import { productdata } from 'src/productsData';
import { Observable } from 'rxjs';
import {
  addItemToCartRequest,
  getCartRequest,
} from 'src/app/state/Cart/cart.actions';
import { ProductService } from 'src/app/state/Product/product.service';
import { CartService } from 'src/app/state/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  selectedSize!: string;
  relatedProducts: any;
  reviews = [
    {
      name: 'Narjis doukali',
      date: 'Oct 4, 2023',
      image: 'https://i.pinimg.com/474x/ee/9b/6c/ee9b6cbad2a6158a2d06b449ca4de346.jpg',
      rating: 4,
      comment: 'Nice product, I like it.'
    },
  
    {
      name: 'omar abarra',
      date: 'Dec 3, 2023',
      image: 'https://i.pinimg.com/474x/f2/fe/b2/f2feb21ce8bf90ec55f51d5fb764cfe3.jpg',
      rating: 5,
      comment: 'Oh My goooood !!!'
    },
  
  
    {
      name: 'riham anasi',
      date: 'Dec 5, 2023',
      image: 'https://i.pinimg.com/474x/32/10/13/321013c4fdb7428f72287fb6e70c67ed.jpg',
      rating: 6,
      comment: 'Nice waw '
    },]

  productDetails$!: Observable<any>;
  productId!: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private productService: ProductService,
    private cartService:CartService,
  ) {
    this.relatedProducts = productdata;
  }

  navigateToCart = () => {
    this.router.navigate(['/cart']);
  };

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('productId', id);

    if (id) {
      console.log('id ', id);
      this.productService.findProductById(id)
    }

    this.productDetails$ = this.store.select(
      (state) => state.product.selectedProduct
    );

    this.productDetails$.subscribe((productdata) => {
      this.productId = Number(productdata.id);
      console.log('product details from store - ', productdata.id);
    });
  }

  handleAddToCart = () => {
    const data = { size: this.selectedSize, productId: this.productId };
    this.cartService.addItemToCart(data)
    this.cartService.getCart()

    this.store.dispatch(getCartRequest());

    this.navigateToCart();
  };
}
