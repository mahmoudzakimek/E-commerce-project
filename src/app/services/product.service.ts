import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<any>(new URL(environment.api).toString());
  }

  getCategories() {
    return this.http.get<any>(
      new URL(environment.api + '/categories').toString()
    );
  }

  searchPro(cat: any) {
    return this.http.get<any>(
      new URL(environment.api + `/search?q=${cat}`).toString()
    );
  }

  getProdById(id:any){
    return this.http.get<any>(
      new URL(environment.api + `/${id}`).toString()
    );

  }
}
