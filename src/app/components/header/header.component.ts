import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchValue?: string;
  form: FormGroup = new FormGroup({});
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [''],
    });
  }

  onSearch() {
    console.log(this.form.value);
    this.productService.searchPro(this.form.value.search).subscribe((res) => {
      console.log(res);
      this.productService.subject.next(
      res
      )
    });
  }
}
