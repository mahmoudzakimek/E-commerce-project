import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: any = [];
  clonedProducts: any = [];
  allCategories: any = [];
  constructor(private productService: ProductService  ,private toaster : ToastrService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getCatgs();
    console.log();
    this.productService.subject.subscribe(
      res=> {this.products = res.products;
      console.log(res)
      }
    )
  }
  getAllProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data.products;
      this.clonedProducts = data.products;
    });
  }

  getCatgs() {
    this.productService.getCategories().subscribe((res) => {
      this.allCategories = res;
    });
  }

  filtByCat(event: any): void {
    console.log(event.target.value);
    let catName = event.target.value;
    if (catName === 'All') {
      this.products;
    } else {
      this.products = this.clonedProducts.filter(
        (elem: any) => elem.category == catName
      );
    }
  }
  addToCart(product:any){
 this.productService.cartCount.includes(product) ? this.toaster.error('no') : this.productService.cartCount.push(product)
  }
}
