import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productlist:product[];
  constructor(private ps:ProductService) { }

  ngOnInit(): void {
       this.ps.getProducts().subscribe(
          (data:product[])=> {
            this.productlist=data,
            this.ps.products=data
          },
          ()=>{this.productlist=[]}
       )
  }

}
