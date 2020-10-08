
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products:product[]=[];


  constructor( private http:HttpClient) { }

  getProducts():Observable<object>{
     return this.http.get("http://40.87.64.90:4500/products/all");
  }

  getProduct(id:number):product{
    return this.products[id-1];
  }
}
