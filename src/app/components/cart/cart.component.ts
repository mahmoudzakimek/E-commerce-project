import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartsProds  : any = []
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
  }
  getProdToCart(){
    this.productService.cartCount = this.cartsProds
  }

}
