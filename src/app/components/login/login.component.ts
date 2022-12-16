import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
 constructor(private fb : FormBuilder ,  private productService : ProductService ,private router :Router){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[Validators.required  , Validators.minLength(3)]],
      password:['', [Validators.required,Validators.minLength(3)]]
    })
  }

  login(){
    console.log(this.loginForm.value)
    this.productService.loginUser = this.loginForm.value.username
    console.log(this.productService.loginUser)
    this.router.navigate(['/products'])
  }
  

}
