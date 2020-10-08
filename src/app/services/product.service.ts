
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  getProducts():Observable<object>{
     return this.http.get("http://40.87.64.90:4500/products/all");
  }
}
