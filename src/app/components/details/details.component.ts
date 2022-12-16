import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id?:number
  details: any
  constructor(private route : ActivatedRoute ,private productService : ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getProdById()
  }

  getProdById(){
    this.productService.getProdById(this.id).subscribe(
      res=>{this.details=res
      }
    )
  }
}
